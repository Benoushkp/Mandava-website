#!/bin/bash
echo "🚂 Deploying to Railway..."

# Check if Railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login to Railway
railway login

# Initialize Railway project
railway init

# Set environment variables
railway variables set NODE_ENV=production
railway variables set PORT=3001
# Add your MongoDB URI: railway variables set MONGODB_URI=your_connection_string

# Deploy
railway up

echo "✅ Deployment complete!"
echo "Visit your Railway dashboard for the app URL"
