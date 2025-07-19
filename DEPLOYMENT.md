# 🚀 Mandava Science Foundation - Deployment Guide

This guide will help you deploy your full-stack volunteer application to production.

## 📋 Prerequisites

- Node.js (v16 or higher)
- MongoDB Atlas account (for cloud database)
- A hosting platform (Railway, Render, Heroku, Vercel, etc.)

## 🗄️ Database Setup (MongoDB Atlas)

1. **Create MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account
   - Create a new cluster

2. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

## 🌐 Hosting Options

### Option 1: Railway (Recommended - Easy)

1. **Sign up** at [Railway](https://railway.app)
2. **Connect your GitHub repository**
3. **Set Environment Variables**:
   ```
   NODE_ENV=production
   MONGODB_URI=your_mongodb_atlas_connection_string
   PORT=3001
   ```
4. **Deploy** - Railway will automatically build and deploy

### Option 2: Render

1. **Sign up** at [Render](https://render.com)
2. **Create a new Web Service**
3. **Connect your GitHub repository**
4. **Configure**:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment Variables: Same as above

### Option 3: Heroku

1. **Install Heroku CLI**
2. **Create Heroku app**:
   ```bash
   heroku create your-app-name
   ```
3. **Set environment variables**:
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set MONGODB_URI=your_mongodb_atlas_connection_string
   ```
4. **Deploy**:
   ```bash
   git add .
   git commit -m "Deploy to production"
   git push heroku main
   ```

## 🔧 Local Production Testing

Before deploying, test your production build locally:

```bash
# Build the frontend
cd mandava-science
npm run build

# Start production server
cd ../mandava-backend
NODE_ENV=production npm start
```

Visit `http://localhost:3001` to test your production build.

## 📁 Project Structure for Deployment

```
Mandava/
├── mandava-backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   ├── routes/
│   │   └── participate.js # API routes
│   └── models/
│       └── Volunteer.js   # Database model
├── mandava-science/
│   ├── src/               # React source code
│   ├── dist/              # Built frontend (generated)
│   └── package.json       # Frontend dependencies
└── DEPLOYMENT.md          # This file
```

## 🔒 Environment Variables

Set these in your hosting platform:

| Variable | Description | Example |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `MONGODB_URI` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/mandava` |
| `PORT` | Server port | `3001` |

## 🚀 Deployment Steps

1. **Prepare your code**:
   ```bash
   # Build frontend
   cd mandava-science
   npm run build
   
   # Test production build locally
   cd ../mandava-backend
   NODE_ENV=production npm start
   ```

2. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

3. **Deploy to your chosen platform** (follow platform-specific instructions above)

4. **Verify deployment**:
   - Check your app URL
   - Test the volunteer form
   - Verify data is being saved to MongoDB Atlas

## 📊 Monitoring & Maintenance

### View Application Data
- **MongoDB Atlas Dashboard**: View your database
- **MongoDB Compass**: Connect to your Atlas cluster
- **Command Line**:
  ```bash
  mongosh "your_atlas_connection_string" --eval "db.volunteers.find().pretty()"
  ```

### Logs & Debugging
- Check your hosting platform's logs
- Monitor MongoDB Atlas metrics
- Set up error tracking (Sentry, etc.)

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure your domain is in the CORS origins list
2. **Database Connection**: Verify MongoDB Atlas connection string
3. **Build Failures**: Check Node.js version compatibility
4. **Static Files Not Serving**: Ensure `dist` folder is built and accessible

### Support:
- Check hosting platform documentation
- MongoDB Atlas support
- Node.js/Express documentation

## 🎉 Success!

Once deployed, your volunteer application will be live and accessible to users worldwide! 