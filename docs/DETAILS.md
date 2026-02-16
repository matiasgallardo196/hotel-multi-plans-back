# 🔧 Project Details

This document explains the specific technical features and configurations of the **Hotel Multi Plans Backend**.

---

## 🛠️ Global Configuration

### Validation Pipe
We use a global `ValidationPipe` with the following settings:
- **`whitelist: true`**: Automatically strips any properties from the request body that are not defined in the DTO.
- **`transform: true`**: Automatically transforms payloads to be objects typed according to their DTO classes.

### Error Handling
A global `AllExceptionsFilter` handles all thrown exceptions, ensuring a consistent error response format.
- In **Development**: Returns detailed error messages.
- In **Production**: masks internal server errors (500) to prevent information leakage.

### Rate Limiting (Throttler)
Rate limiting is enabled globally to protect against abuse.
- **Default TTL**: 60 seconds
- **Default Limit**: 100 requests per IP
- Configurable via `RATE_LIMIT_TTL` and `RATE_LIMIT_LIMIT` environment variables.

---

## 🏨 Domain Logic

### Hotels Management
- **Entity**: `Hotel`
- **Purpose**: Represents a physical hotel property.
- **Key Fields**:
  - `floorPlanUrl`: Stores the URL of the floor plan image. This allows the frontend to render the specific layout for each hotel.

### Rooms Management
- **Entity**: `Room`
- **Purpose**: Represents a room within a hotel.
- **Key Fields**:
  - `status`: String based status (e.g. 'free', 'occupied', 'maintenance').
  - `polygon`: Stored as a `jsonb` column. This contains the coordinate points (x, y) that define the room's shape on the floor plan.
  - `occupants`: Stored as a `jsonb` column. Allows flexible storage of occupant data (names, dates, etc.) without a strict schema.

---

## 📝 Logging (Pino)
We use `nestjs-pino` for high-performance structured logging.
- **Correlation ID**: Every request is assigned a unique `req.id` for tracing.
- **Auto-logging**: Requests and responses are automatically logged (configurable via `FULL_LOGS`).
- **Sensitive Data**: Headers like `authorization` and `cookie` are redacted from logs.

---

## 📡 API Documentation (Swagger)
The API documentation is automatically generated from the Controller decorators and DTO classes.
- Accessible at `/docs` (only in Development mode).
- Provides interactive testing for all endpoints.

---

## 🔒 Security
- **Helmet**: Adds security-related HTTP headers.
- **CORS**: Configurable via `CORS_ORIGIN` env var to restrict cross-origin requests.
