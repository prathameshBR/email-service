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
node src/index.js


##  API Endpoint....
**POST** `/send-email`

### Request Body:
```json
{
  "to": "test@example.com",
  "subject": "Hello",
  "body": "This is a test email"
}

## Sample Response:

{
  "status": "sent",
  "provider": "Provider 1"
}


## Duplicate Request Response:

{
  "status": "duplicate",
  "message": "Email already sent"
}


## 🎥 Demo Video

📺 [Watch Demo Video](https://drive.google.com/file/d/10v5GnkufRuFEv-Jt79HaQoquwkgd4H0P/view?usp=drive_link)

