// src/services/EmailService.js

const providerA = require('../providers/MockproviderA.js');
const providerB = require('../providers/MockproviderB.js');
const RateLimiter = require('../utils/RateLimiter');

class EmailService {
  constructor() {
    this.providers = [providerA, providerB];
    this.rateLimiter = new RateLimiter(5, 60000); // 5 emails per minute
    this.sentEmails = new Set(); // Idempotency
    this.statusLog = [];
  }

  async send(emailId, emailData) {
    if (this.sentEmails.has(emailId)) {
      return { status: 'duplicate', message: 'Email already sent' };
    }

    if (!this.rateLimiter.allow()) {
      return { status: 'rate-limited', message: 'Rate limit exceeded' };
    }

    for (let i = 0; i < this.providers.length; i++) {
      try {
        const result = await this.retrySend(this.providers[i], emailData, 3);
        this.sentEmails.add(emailId);
        const status = { provider: i + 1, emailId, success: true, timestamp: new Date() };
        this.statusLog.push(status);
        return { status: 'sent', provider: `Provider ${i + 1}` };
      } catch (err) {
        console.log(`Provider ${i + 1} failed. Trying next...`);
      }
    }

    const status = { emailId, success: false, timestamp: new Date() };
    this.statusLog.push(status);
    return { status: 'failed', message: 'All providers failed' };
  }

  async retrySend(provider, emailData, retries) {
    let attempt = 0;
    while (attempt < retries) {
      try {
        return await provider.sendEmail(emailData);
      } catch (error) {
        attempt++;
        const backoff = Math.pow(2, attempt) * 100; // exponential backoff
        console.log(`Retry ${attempt} after ${backoff}ms`);
        await new Promise(resolve => setTimeout(resolve, backoff));
      }
    }
    throw new Error('Retries exhausted');
  }

  getStatusLog() {
    return this.statusLog;
  }
}

module.exports = EmailService;
