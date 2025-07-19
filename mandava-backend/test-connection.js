require('dotenv').config();
const mongoose = require('mongoose');

console.log('🔍 Testing MongoDB Atlas Connection...');
console.log('Connection String:', process.env.MONGODB_URI ? 'Found' : 'Missing');

// Test connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // 5 second timeout
})
.then(() => {
  console.log('✅ Successfully connected to MongoDB Atlas!');
  console.log('Database:', mongoose.connection.db.databaseName);
  mongoose.connection.close();
})
.catch(err => {
  console.error('❌ MongoDB connection failed:');
  console.error('Error:', err.message);
  
  if (err.message.includes('authentication')) {
    console.log('\n🔑 Authentication Error - Check:');
    console.log('1. Username is correct');
    console.log('2. Password is correct');
    console.log('3. User has proper permissions');
  } else if (err.message.includes('timeout')) {
    console.log('\n⏰ Timeout Error - Check:');
    console.log('1. Network Access in MongoDB Atlas');
    console.log('2. Internet connection');
    console.log('3. Firewall settings');
  } else if (err.message.includes('ENOTFOUND')) {
    console.log('\n🌐 DNS Error - Check:');
    console.log('1. Cluster URL is correct');
    console.log('2. Internet connection');
  }
  
  process.exit(1);
}); 