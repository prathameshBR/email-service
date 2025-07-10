const EmailService = require('./services/EmailService');

const emailService = new EmailService();

async function test() {
  const emailId = 'abc123'; // unique email ID
  const emailData = {
    to: 'test@example.com',
    subject: 'Hello!',
    body: 'This is a test email.',
  };

  const result1 = await emailService.send(emailId, emailData);
  console.log('Send result:', result1);

  const result2 = await emailService.send(emailId, emailData); // duplicate test
  console.log('Second send (should be duplicate):', result2);

  console.log('Status Log:', emailService.getStatusLog());
}

test();
