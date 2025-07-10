// src/utils/RateLimiter.js

class RateLimiter {
  constructor(limit, interval) {
    this.limit = limit; // e.g. 5 requests
    this.interval = interval; // e.g. 60000ms = 1 min
    this.timestamps = [];
  }

  allow() {
    const now = Date.now();
    // Remove old timestamps
    this.timestamps = this.timestamps.filter(ts => now - ts < this.interval);

    if (this.timestamps.length < this.limit) {
      this.timestamps.push(now);
      return true;
    }

    return false;
  }
}

module.exports = RateLimiter;