#!/bin/bash

echo "🚀 Building Mandava Science Foundation for Production..."

# Check if public directory already exists with files
if [ -f "public/index.html" ]; then
    echo "✅ Frontend build already exists in public/"
    echo "🚀 Ready for deployment!"
    exit 0
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd mandava-science
npm install

# Build the frontend
echo "📦 Building React frontend..."
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