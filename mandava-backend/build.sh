#!/bin/bash

echo "🚀 Building Mandava Science Foundation for Production..."

# Build the frontend
echo "📦 Building React frontend..."
cd ../mandava-science
npm run build

# Create public directory in backend if it doesn't exist
cd ../mandava-backend
mkdir -p public

# Copy frontend build to backend public directory
echo "📁 Copying frontend build to backend..."
cp -r ../mandava-science/dist/* public/

echo "✅ Build completed successfully!"
echo "📁 Frontend build copied to: mandava-backend/public/"
echo "🚀 Ready for deployment!" 