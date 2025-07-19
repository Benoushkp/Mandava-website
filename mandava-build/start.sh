#!/bin/bash
echo "🚀 Starting Mandava Science Foundation..."

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "⚠️  No .env file found. Creating from .env.production..."
    cp .env.production .env
    echo "📝 Please edit .env and add your MongoDB connection string"
    echo "   Then run: npm install && npm start"
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the server
echo "🌐 Starting server..."
npm start
