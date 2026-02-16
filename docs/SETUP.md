# 🚀 Setup Guide

This guide will help you set up and run the **Hotel Multi Plans Backend** locally.

---

## 🛠 Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PostgreSQL](https://www.postgresql.org/) (local or cloud instance like Neon/Supabase)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

---

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd hotel-multi-plans-back
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## ⚙️ Configuration

1. **Create Environment File:**
   Copy the example environment file to create your development configuration.
   ```bash
   cp .env.development.example .env.development
   ```

2. **Update Environment Variables:**
   Open `.env.development` and configure the following:

   | Variable | Description | Default |
   | :--- | :--- | :--- |
   | `PORT` | Port for the server to listen on | `3000` |
   | `CORS_ORIGIN` | Allowed domains for CORS | `*` |
   | `DATABASE_URL` | **Required** PostgreSQL connection string | `postgresql://user:password@localhost:5432/mydb` |
   | `FRONTEND_URL` | URL of the frontend application | `http://localhost:3000` |
   | `LOGGER_LEVEL` | Log verbosity (debug, info, warn, error) | `debug` |

   **Example `.env.development`:**
   ```ini
   PORT=3000
   CORS_ORIGIN=*
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/hotel_db
   LOGGER_LEVEL=debug
   ```

---

## 🏃‍♂️ Running the App

### Development Mode
Runs the application with hot-reload enabled.
```bash
npm run start:dev
```

### Production Mode
Builds and runs the optimized application.
```bash
npm run build
npm run start:prod
```

### Testing
Run unit tests.
```bash
npm run test
```

---

## 🔍 Verification

Once the server is running, you can verify it's working:

1. **Health Check:**
   Open your browser or use `curl`:
   ```bash
   curl http://localhost:3000/health
   ```
   *Expected Output:* `{"status": "ok", ...}`

2. **API Documentation:**
   The Swagger UI is available at:
   [http://localhost:3000/docs](http://localhost:3000/docs)

---

## 🗄️ Database Management

If you make changes to the entities (`src/**/*.entity.ts`), TypeORM will automatically synchronize the database schema in **development mode** (`synchornize: true` is usually enabled in dev config).

For production, you should set up migrations (if configured).
