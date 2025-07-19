#!/bin/bash

# 🚀 Mandava Science Foundation - Complete Build Script
# This script builds the entire full-stack application

echo "🏗️  Building Mandava Science Foundation Application..."
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -d "mandava-backend" ] || [ ! -d "mandava-science" ]; then
    print_error "Please run this script from the root directory (Mandava/)"
    exit 1
fi

# Create build directory
BUILD_DIR="mandava-build"
print_status "Creating build directory: $BUILD_DIR"
rm -rf $BUILD_DIR
mkdir -p $BUILD_DIR

# Step 1: Build Frontend
print_status "Building frontend (React app)..."
cd mandava-science

if npm run build; then
    print_success "Frontend built successfully!"
else
    print_error "Frontend build failed!"
    exit 1
fi

cd ..

# Step 2: Copy Backend
print_status "Copying backend files..."
cp -r mandava-backend/* $BUILD_DIR/
rm -rf $BUILD_DIR/node_modules 2>/dev/null || true

# Step 3: Copy Frontend Build
print_status "Copying frontend build files..."
cp -r mandava-science/dist $BUILD_DIR/public

# Step 4: Create Production Configuration
print_status "Creating production configuration..."

# Create .env.production file
cat > $BUILD_DIR/.env.production << EOF
NODE_ENV=production
PORT=3001
# Add your MongoDB Atlas connection string here:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mandava
EOF

# Create package.json for production
cat > $BUILD_DIR/package.json << EOF
{
  "name": "mandava-science-foundation",
  "version": "1.0.0",
  "description": "Mandava Science Foundation - Volunteer Application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "echo 'Build completed'",
    "test": "echo 'No tests specified'"
  },
  "keywords": ["volunteer", "science", "foundation", "mongodb", "express", "react"],
  "author": "Mandava Science Foundation",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.5.0",
    "express": "^4.18.2",
    "mongoose": "^8.16.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
EOF

# Create README for deployment
cat > $BUILD_DIR/README.md << EOF
# 🚀 Mandava Science Foundation - Production Build

This is the production build of the Mandava Science Foundation volunteer application.

## Quick Start

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Set up environment variables:
   - Copy \`.env.production\` to \`.env\`
   - Add your MongoDB Atlas connection string

3. Start the server:
   \`\`\`bash
   npm start
   \`\`\`

## Environment Variables

- \`NODE_ENV\`: Set to \`production\`
- \`PORT\`: Server port (default: 3001)
- \`MONGODB_URI\`: MongoDB Atlas connection string

## Features

- ✅ Full-stack volunteer application
- ✅ MongoDB database integration
- ✅ Production-ready build
- ✅ Single server deployment
- ✅ Responsive design

## API Endpoints

- \`POST /api/participate\`: Submit volunteer application

## File Structure

\`\`\`
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
\`\`\`

## Deployment

This build is ready for deployment on:
- Railway
- Render
- Heroku
- Vercel
- Any Node.js hosting platform

## Support

For support, contact the development team.
EOF

# Step 5: Create deployment scripts
print_status "Creating deployment scripts..."

# Railway deployment script
cat > $BUILD_DIR/deploy-railway.sh << 'EOF'
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
EOF

chmod +x $BUILD_DIR/deploy-railway.sh

# Render deployment script
cat > $BUILD_DIR/deploy-render.sh << 'EOF'
#!/bin/bash
echo "🎨 Deploying to Render..."

echo "1. Go to https://render.com"
echo "2. Create a new Web Service"
echo "3. Connect your GitHub repository"
echo "4. Set build command: npm install"
echo "5. Set start command: npm start"
echo "6. Add environment variables:"
echo "   - NODE_ENV=production"
echo "   - PORT=3001"
echo "   - MONGODB_URI=your_connection_string"
echo "7. Deploy!"

echo "✅ Follow the steps above to deploy to Render"
EOF

chmod +x $BUILD_DIR/deploy-render.sh

# Step 6: Create a simple start script
cat > $BUILD_DIR/start.sh << 'EOF'
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
EOF

chmod +x $BUILD_DIR/start.sh

# Step 7: Create a Dockerfile for containerization
cat > $BUILD_DIR/Dockerfile << 'EOF'
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application files
COPY . .

# Expose port
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
EOF

# Step 8: Create docker-compose for local testing
cat > $BUILD_DIR/docker-compose.yml << 'EOF'
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - PORT=3001
      # Add your MongoDB URI here:
      # - MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mandava
    restart: unless-stopped

  # Optional: Add MongoDB for local development
  # mongodb:
  #   image: mongo:latest
  #   ports:
  #     - "27017:27017"
  #   environment:
  #     - MONGO_INITDB_DATABASE=mandava
EOF

# Step 9: Create .dockerignore
cat > $BUILD_DIR/.dockerignore << 'EOF'
node_modules
npm-debug.log
.env
.env.local
.env.production
.git
.gitignore
README.md
deploy-*.sh
start.sh
EOF

# Step 10: Create a build summary
print_status "Creating build summary..."

cat > $BUILD_DIR/BUILD_INFO.md << EOF
# 📋 Build Information

**Build Date:** $(date)
**Build Version:** 1.0.0
**Node.js Version:** $(node --version)
**NPM Version:** $(npm --version)

## What's Included

✅ **Frontend**: React app built with Vite
✅ **Backend**: Express.js server with MongoDB
✅ **Database**: MongoDB integration ready
✅ **Production Config**: Environment variables setup
✅ **Deployment Scripts**: Railway, Render, Docker
✅ **Documentation**: Complete README and guides

## File Sizes

- Frontend Build: $(du -sh public/ | cut -f1)
- Total Build: $(du -sh . | cut -f1)

## Next Steps

1. **Set up MongoDB Atlas** for cloud database
2. **Choose deployment platform** (Railway recommended)
3. **Set environment variables** (MONGODB_URI)
4. **Deploy and test** your application

## Quick Start

\`\`\`bash
cd $BUILD_DIR
cp .env.production .env
# Edit .env and add your MongoDB URI
npm install
npm start
\`\`\`

Visit http://localhost:3001 to see your app!
EOF

# Step 11: Final steps
print_status "Installing production dependencies..."
cd $BUILD_DIR
npm install --production

# Create a zip file for easy distribution
print_status "Creating distribution package..."
cd ..
zip -r mandava-science-foundation.zip $BUILD_DIR

# Final summary
echo ""
echo "🎉 BUILD COMPLETE!"
echo "=================="
print_success "Your application has been built successfully!"
echo ""
echo "📁 Build Location: $BUILD_DIR/"
echo "📦 Distribution: mandava-science-foundation.zip"
echo ""
echo "🚀 Quick Start:"
echo "   cd $BUILD_DIR"
echo "   cp .env.production .env"
echo "   # Edit .env and add your MongoDB URI"
echo "   npm start"
echo ""
echo "🌐 Your app will be available at: http://localhost:3001"
echo ""
echo "📚 Deployment Options:"
echo "   - Railway: ./deploy-railway.sh"
echo "   - Render: ./deploy-render.sh"
echo "   - Docker: docker-compose up"
echo ""
print_success "Build completed successfully! 🎉" 