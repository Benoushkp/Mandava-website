# 🚀 Mandava Science Foundation - Deployment Guide

## 📋 **Prerequisites**

- ✅ MongoDB Atlas database configured
- ✅ Local development working
- ✅ Production build tested

## 🎯 **Deployment Options**

### **Option 1: Railway (Recommended)**
- **Cost:** Free tier available
- **Features:** Automatic HTTPS, custom domains, easy deployment
- **Best for:** Full-stack apps with database

### **Option 2: Render**
- **Cost:** Free tier available
- **Features:** Easy setup, good performance
- **Best for:** Full-stack apps

### **Option 3: Heroku**
- **Cost:** Paid plans only
- **Features:** Well-established platform
- **Best for:** Production apps

## 🚀 **Railway Deployment (Step-by-Step)**

### **Step 1: Prepare Your Code**

Your code is already prepared with:
- ✅ `build.sh` - Builds frontend and copies to backend
- ✅ `railway.json` - Railway configuration
- ✅ Updated `server.js` - Serves static files from `public/`
- ✅ Updated `package.json` - Production scripts

### **Step 2: Deploy to Railway**

1. **Go to [Railway.app](https://railway.app)**
2. **Sign up/Login with GitHub**
3. **Click "New Project"**
4. **Choose "Deploy from GitHub repo"**
5. **Select your repository**
6. **Railway will automatically detect it's a Node.js app**

### **Step 3: Configure Environment Variables**

In Railway dashboard, add these environment variables:

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://mandava_user:Mandava2024!@mandavasciencefoundatio.9s1w5uq.mongodb.net/mandava?retryWrites=true&w=majority&appName=MandavaScienceFoundation
PORT=3001
```

### **Step 4: Deploy**

1. **Railway will automatically run:**
   - `npm install`
   - `npm run build` (builds frontend)
   - `npm start` (starts server)

2. **Wait for deployment to complete**
3. **Your app will be live at the provided URL**

### **Step 5: Custom Domain (Optional)**

1. **In Railway dashboard, go to "Settings"**
2. **Click "Domains"**
3. **Add your custom domain**
4. **Update DNS records as instructed**

## 🔧 **Alternative: Render Deployment**

### **Step 1: Prepare for Render**

1. **Create `render.yaml` file:**

```yaml
services:
  - type: web
    name: mandava-science-foundation
    env: node
    buildCommand: npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        value: mongodb+srv://mandava_user:Mandava2024!@mandavasciencefoundatio.9s1w5uq.mongodb.net/mandava?retryWrites=true&w=majority&appName=MandavaScienceFoundation
```

### **Step 2: Deploy to Render**

1. **Go to [Render.com](https://render.com)**
2. **Sign up/Login with GitHub**
3. **Click "New Web Service"**
4. **Connect your GitHub repository**
5. **Configure settings:**
   - **Name:** mandava-science-foundation
   - **Environment:** Node
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
6. **Add environment variables**
7. **Click "Create Web Service"**

## 🌐 **Post-Deployment**

### **Test Your Live App**

1. **Visit your deployed URL**
2. **Test the volunteer form**
3. **Check MongoDB Atlas for data**
4. **Verify all pages work**

### **Monitor Your App**

- **Railway:** Built-in monitoring
- **Render:** Built-in monitoring
- **MongoDB Atlas:** Database monitoring

### **Update Your App**

1. **Push changes to GitHub**
2. **Railway/Render will auto-deploy**
3. **Or manually trigger deployment**

## 🔍 **Troubleshooting**

### **Common Issues:**

1. **Build Fails:**
   - Check `build.sh` permissions
   - Verify frontend dependencies

2. **Database Connection:**
   - Verify MongoDB Atlas network access
   - Check connection string

3. **Static Files Not Loading:**
   - Check `public/` directory exists
   - Verify `server.js` static file serving

4. **Environment Variables:**
   - Ensure all variables are set in platform dashboard

## 📞 **Support**

- **Railway:** [docs.railway.app](https://docs.railway.app)
- **Render:** [render.com/docs](https://render.com/docs)
- **MongoDB Atlas:** [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com)

---

## 🎉 **Your App is Ready for Deployment!**

Your full-stack application is now configured for production deployment. Choose Railway for the easiest deployment experience! 