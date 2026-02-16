# Hotel Multi Plans Backend

A robust NestJS backend for managing multiple hotel floor plans, rooms, and occupancies. Designed to support dynamic floor plan visualization on the frontend.

## 🚀 Key Features

- **Multi-Hotel Support**: Manage multiple properties with distinct floor plans.
- **Room Management**: Create, update, and organize rooms within hotels.
- **Floor Plan Visualization**: Store and serve floor plan images and polygon data for interactive frontend rendering.
- **Occupancy Tracking**: Real-time status updates (Free, Occupied, Maintenance) for rooms.
- **Secure & Scalable**: Built with NestJS, TypeORM, and PostgreSQL.

---

## �️ Technology Stack

- **Node.js** + **NestJS 11**
- **TypeScript**
- **PostgreSQL** (Database)
- **TypeORM** (ORM)
- **Pino** (Structured logging)
- **class-validator** (DTO Validation)
- **Swagger** (API Documentation)

---

## 📖 Documentation

This project is documented in 3 main sections:

### 🧱 [ARCHITECTURE.md](./docs/ARCHITECTURE.md)

Project structure, module organization (Hotels, Rooms), and database schema details.

### 🚀 [SETUP.md](./docs/SETUP.md)

Step-by-step guide to get the project running locally: installation, database setup, and environment configuration.

### 🔧 [DETAILS.md](./docs/DETAILS.md)

Detailed explanation of specific functionalities including API endpoints and business logic.

---

## 🎯 Quick Start

1. **Clone the repository**
2. **Install dependencies**: `npm install`
3. **Configure Environment**: Copy `.env.development.example` to `.env.development` and update database credentials.
4. **Run Database Migrations** (if applicable) or ensure schema sync is enabled for dev.
5. **Start server**: `npm run start:dev`
6. **Test**:
   - `GET /health` → `{ "status": "ok" }`
   - `GET /docs` → Swagger UI (development only) at http://localhost:3000/docs

For more details, check [SETUP.md](./docs/SETUP.md).

---

## 📝 License

UNLICENSED
