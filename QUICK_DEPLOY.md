# 🚀 Quick Deployment Guide

## **Your App is Ready for Deployment!**

### **✅ What's Prepared:**
- ✅ Production build script (`build.sh`)
- ✅ Railway configuration (`railway.json`)
- ✅ Render configuration (`render.yaml`)
- ✅ Updated server for static file serving
- ✅ MongoDB Atlas connection configured

### **🚀 Deploy to Railway (Recommended):**

1. **Go to:** https://railway.app
2. **Sign up with GitHub**
3. **Click "New Project" → "Deploy from GitHub repo"**
4. **Select your repository**
5. **Add Environment Variables:**
   ```
   NODE_ENV=production
   MONGODB_URI=mongodb+srv://mandava_user:Mandava2024!@mandavasciencefoundatio.9s1w5uq.mongodb.net/mandava?retryWrites=true&w=majority&appName=MandavaScienceFoundation
   PORT=3001
   ```
6. **Deploy!**

### **🌐 Deploy to Render (Alternative):**

1. **Go to:** https://render.com
2. **Sign up with GitHub**
3. **Click "New Web Service"**
4. **Connect your repository**
5. **Configure:**
   - **Build Command:** `npm run build`
   - **Start Command:** `npm start`
6. **Add the same environment variables**
7. **Deploy!**

### **📊 After Deployment:**

- ✅ Your app will be live at the provided URL
- ✅ Volunteer form will work
- ✅ Data will be stored in MongoDB Atlas
- ✅ All pages will be accessible

### **🔧 Environment Variables Required:**

```
NODE_ENV=production
MONGODB_URI=mongodb+srv://mandava_user:Mandava2024!@mandavasciencefoundatio.9s1w5uq.mongodb.net/mandava?retryWrites=true&w=majority&appName=MandavaScienceFoundation
PORT=3001
```

### **📞 Need Help?**

- **Railway Docs:** https://docs.railway.app
- **Render Docs:** https://render.com/docs
- **Full Guide:** See `DEPLOYMENT_GUIDE.md`

---

**🎉 Your full-stack app is ready to go live!** 