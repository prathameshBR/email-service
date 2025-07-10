# Resilient Email Sending Service

A backend email-sending service in JavaScript that includes:
- Retry logic with exponential backoff
- Fallback between two mock providers
- Rate limiting
- Idempotency support
- Status tracking
- Clean architecture with SOLID principles

## 🛠️ Features

- ✅ Retry mechanism
- ✅ Provider fallback (mocked)
- ✅ Idempotency (unique message IDs)
- ✅ Rate Limiting (basic in-memory)
- ✅ Status tracking per email
- 🔄 Optional: Circuit Breaker pattern
- 📋 Logging
- ⏳ Simple queue (optional)

## 📦 Technologies

- JavaScript (Node.js)
- No external email APIs (mocked providers)
- In-memory store for idempotency and status

## 🚀 How to Run

```bash
npm install
node index.js