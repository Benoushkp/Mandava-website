# 🧬 Mandava Science Foundation

A full-stack web application for the Mandava Science Foundation, featuring a volunteer registration system and comprehensive information about the foundation's mission, projects, and impact.

## 🌟 **Features**

- **🏠 Home Page** - Foundation overview and mission
- **👥 Who We Are** - Team and organization information
- **💡 Beliefs** - Core values and principles
- **📋 Projects** - Current and past initiatives
- **📸 Gallery** - Visual showcase of activities
- **🤝 Participate** - Volunteer registration form
- **💝 Donate** - Support the foundation

## 🚀 **Tech Stack**

### **Frontend**
- **React.js** - Modern UI framework
- **Vite** - Fast build tool
- **CSS3** - Styling and animations
- **Responsive Design** - Mobile-first approach

### **Backend**
- **Node.js** - Server runtime
- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - Database ODM

### **Deployment**
- **Railway** - Hosting platform
- **MongoDB Atlas** - Database hosting
- **GitHub** - Version control

## 📦 **Installation**

### **Prerequisites**
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account

### **Local Development**

1. **Clone the repository**
   ```bash
   git clone https://github.com/Benoushkp/Mandava-website.git
   cd Mandava-website
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd mandava-backend
   npm install
   
   # Install frontend dependencies
   cd ../mandava-science
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In mandava-backend directory, create .env file
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/mandava?retryWrites=true&w=majority
   PORT=3001
   NODE_ENV=development
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Start backend
   cd mandava-backend
   npm run dev
   
   # Terminal 2 - Start frontend
   cd mandava-science
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

## 🚀 **Deployment**

### **Railway Deployment (Recommended)**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Railway**
   - Go to [Railway.app](https://railway.app)
   - Connect your GitHub repository
   - Add environment variables
   - Deploy!

### **Environment Variables for Production**
```
NODE_ENV=production
MONGODB_URI=mongodb+srv://mandava_user:Mandava2024!@mandavasciencefoundatio.9s1w5uq.mongodb.net/mandava?retryWrites=true&w=majority&appName=MandavaScienceFoundation
PORT=3001
```

## 📁 **Project Structure**

```
Mandava/
├── mandava-backend/          # Backend server
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── server.js            # Main server file
│   ├── package.json         # Backend dependencies
│   └── build.sh             # Production build script
├── mandava-science/         # Frontend React app
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/           # Page components
│   │   ├── styles/          # CSS files
│   │   └── assets/          # Images and media
│   ├── public/              # Static files
│   └── package.json         # Frontend dependencies
├── DEPLOYMENT_GUIDE.md      # Detailed deployment guide
├── QUICK_DEPLOY.md          # Quick deployment reference
└── README.md                # This file
```

## 🔧 **API Endpoints**

### **Volunteer Registration**
- **POST** `/api/participate` - Submit volunteer application
- **Request Body:** Volunteer form data
- **Response:** Success/error status

## 📊 **Database Schema**

### **Volunteer Model**
```javascript
{
  title: String,
  firstName: String,
  middleName: String,
  lastName: String,
  gender: String,
  dob: Date,
  age: Number,
  email: String,
  primaryContact: String,
  altContact: String,
  currentAddress: String,
  permanentAddress: String,
  employmentStatus: String,
  qualification: String,
  program: String,
  gradYear: Number,
  collegeName: String,
  collegeAddress: String,
  currentYear: String,
  hobbies: String,
  internshipState: String,
  internshipCity: String,
  internshipPin: String,
  internshipStart: String,
  socialJustice: String,
  economicRespect: String,
  nationBuilding: String,
  createdAt: Date
}
```

## 🌐 **Live Application**

- **Production URL:** [Deployed on Railway]
- **MongoDB Atlas:** Database management
- **GitHub Repository:** https://github.com/Benoushkp/Mandava-website.git

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 **Support**

- **Email:** [Contact information]
- **GitHub Issues:** [Report bugs or request features]
- **Documentation:** See `DEPLOYMENT_GUIDE.md` for detailed setup

## 📄 **License**

This project is licensed under the ISC License.

---

## 🎉 **About Mandava Science Foundation**

The Mandava Science Foundation is dedicated to promoting scientific research, education, and innovation for the betterment of society. Through various initiatives and volunteer programs, we work towards building a more informed and scientifically literate community.

**Join us in our mission to advance science and technology for a better future!** 