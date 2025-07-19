# 🚀 Mandava Science Foundation - Production Build

This is the production build of the Mandava Science Foundation volunteer application.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   - Copy `.env.production` to `.env`
   - Add your MongoDB Atlas connection string

3. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

- `NODE_ENV`: Set to `production`
- `PORT`: Server port (default: 3001)
- `MONGODB_URI`: MongoDB Atlas connection string

## Features

- ✅ Full-stack volunteer application
- ✅ MongoDB database integration
- ✅ Production-ready build
- ✅ Single server deployment
- ✅ Responsive design

## API Endpoints

- `POST /api/participate`: Submit volunteer application

## File Structure

```
mandava-build/
├── server.js          # Main server file
├── package.json       # Dependencies
├── .env.production    # Environment variables
├── public/            # Frontend build files
│   ├── index.html
│   └── assets/
├── routes/            # API routes
├── models/            # Database models
└── README.md          # This file
```

## Deployment

This build is ready for deployment on:
- Railway
- Render
- Heroku
- Vercel
- Any Node.js hosting platform

## Support

For support, contact the development team.
