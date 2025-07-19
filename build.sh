#!/bin/bash

echo "🚀 Building Mandava Science Foundation for Production..."

# Build the frontend
echo "📦 Building React frontend..."
cd mandava-science
npm run build

# Create public directory if it doesn't exist
cd ..
mkdir -p public

# Copy frontend build to public directory
echo "📁 Copying frontend build to public directory..."
cp -r mandava-science/dist/* public/

echo "✅ Build completed successfully!"
echo "📁 Frontend build copied to: public/"
echo "🚀 Ready for deployment!" 