# Project Architecture

This document describes the architecture and organization of the **Hotel Multi Plans Backend**.

---

## 🚀 Technology Stack

- **Node.js 18+** - JavaScript runtime
- **NestJS 11** - Node.js framework
- **TypeScript** - Typed JavaScript
- **PostgreSQL** - Relational Database
- **TypeORM** - Persistent Data Management
- **Pino** - Structured logging
- **class-validator** - DTO validation
- **Swagger** - API Documentation

---

## 🧱 Folder Structure

```
src/
  ├── app.module.ts                    # Root module: global configuration
  ├── main.ts                          # Application bootstrap
  │
  ├── config/
  │   └── env.loader.ts                # Environment variable loading
  │
  ├── common/                          # Shared middleware, pipes, filters
  │   ├── logger/
  │   ├── filters/
  │   ├── interceptors/
  │   └── pipes/
  │
  ├── modules/
  │   ├── health/                      # Health Check Module
  │   ├── hotels/                      # Hotels Management Module
  │   └── rooms/                       # Rooms Management Module
  │
  └── shared/                          # Shared resources
```

---

## 📋 Main Modules

### 1. `HotelsModule`

Manages hotel properties.

- **Controller**: `HotelsController`
  - `POST /hotels` - Create a new hotel
  - `GET /hotels` - List all hotels
  - `GET /hotels/:id` - Get hotel details (including rooms)
  - `PATCH /hotels/:id` - Update hotel details
  - `DELETE /hotels/:id` - Remove a hotel
  - `GET /hotels/:id/rooms` - List rooms for a specific hotel
  - `POST /hotels/:id/rooms` - Create a room for a specific hotel

- **Service**: `HotelsService` - Logic for creation and validation.
- **Entity**: `Hotel`

### 2. `RoomsModule`

Manages individual rooms within a hotel.

- **Controller**: `RoomsController`
  - `GET /rooms/:id` - Get room details
  - `PATCH /rooms/:id` - Update room (status, label, polygon, occupants)
  - `DELETE /rooms/:id` - Remove a room

- **Service**: `RoomsService` - Logic for room manipulation and validation.
- **Entity**: `Room`

---

## 🗄️ Database Schema

### Hotel Entity (`hotels`)

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key |
| `name` | String | Name of the hotel |
| `floorPlanUrl` | String | URL to the floor plan image |
| `createdAt` | DateTime | Timestamp of creation |

### Room Entity (`rooms`)

| Column | Type | Description |
| :--- | :--- | :--- |
| `id` | UUID | Primary Key |
| `label` | String | Room name/number (e.g. "101") |
| `status` | String | Status (free, occupied, etc.) |
| `polygon` | JSONB | Coordinates for the polygon on floor plan |
| `occupants` | JSONB | Array of occupant details |
| `hotelId` | UUID | Foreign Key -> Hotel.id |

**Relationships:**
- **Hotel** One-to-Many **Room** (`hotel.rooms`)
- **Room** Many-to-One **Hotel** (`room.hotel`) - On Delete: CASCADE

---

## 🔄 Request Flow

1. **Request arrives**
2. **ThrottlerGuard** checks rate limit
3. **AppValidationPipe** validates DTOs
4. **Controller** delegates to **Service**
5. **Service** interacts with **TypeORM Repository**
6. **Repository** queries **PostgreSQL**
7. **ResponseInterceptor** formats success response
8. **AllExceptionsFilter** catches and formats errors

---

## 📦 Extensibility

To add new features (e.g. Reservations, Users):
1. Create a new module inside `src/modules/`
2. Define Entity and DTOs
3. Implement Service logic
4. Expose via Controller
5. Register in `app.module.ts`
