// Load environment variables
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const participateRoutes = require('./routes/participate');

const app = express();

// Environment variables
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mandava';
const NODE_ENV = process.env.NODE_ENV || 'development';

// Apply CORS middleware globally
app.use(cors({
  origin: true, // Allow all origins for now
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Optional: Log requests for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} from ${req.headers.origin}`);
  next();
});

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Serve static files in production
if (NODE_ENV === 'production') {
  // Serve static files from the public directory
  const publicPath = path.join(__dirname, 'public');
  console.log('Serving static files from:', publicPath);
  
  // Serve static files with cache busting
  app.use(express.static(publicPath, {
    maxAge: 0, // Disable caching for debugging
    etag: false
  }));
  
  // Add specific logging for image requests
  app.use('/images', (req, res, next) => {
    console.log(`Image request: ${req.method} ${req.url}`);
    next();
  });
}

// API routes
app.use('/api/participate', participateRoutes);

// Serve index.html for all routes (SPA routing) - must be last
if (NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    const publicPath = path.join(__dirname, 'public');
    const indexPath = path.join(publicPath, 'index.html');
    
    // Check if index.html exists
    if (require('fs').existsSync(indexPath)) {
      res.sendFile(indexPath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('Error loading application');
        }
      });
    } else {
      console.log('index.html not found, serving API info');
      res.json({
        message: 'Mandava Science Foundation API',
        status: 'running',
        api: '/api/participate',
        note: 'Frontend build not found. Please check build process.',
        version: '1.0.1' // Force new deployment
      });
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);
  console.log(`Version: 1.0.1 - Updated with new images`); // Force new deployment
});