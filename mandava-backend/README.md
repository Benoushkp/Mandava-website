# Mandava Backend

This is the backend server for the Mandava Science Foundation volunteer application system.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Make sure MongoDB is running on your system:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Ubuntu/Debian
sudo systemctl start mongod

# Or start MongoDB manually
mongod
```

## Running the Server

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on port 3001.

## API Endpoints

- `POST /api/participate` - Submit volunteer application form

## Database

The application uses MongoDB with a `Volunteer` collection to store volunteer applications.

## CORS Configuration

The server is configured to accept requests from `http://localhost:5173` (Vite dev server).

## Port Configuration

The backend runs on port 3001 to avoid conflicts with macOS AirPlay service on port 5000. 