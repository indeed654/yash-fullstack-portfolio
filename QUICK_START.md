# 🚀 Quick Start Guide

## Installation Steps

### 1️⃣ Clone/Setup Project
```bash
# Navigate to project root
cd yash-portfolio

# Verify folder structure
# You should see: /frontend, /backend, README.md
```

### 2️⃣ Setup Backend

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB URI
# For local MongoDB: mongodb://localhost:27017/yash-portfolio
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/yash-portfolio

# Start backend server
npm run dev
```

✅ Backend running on: `http://localhost:5000`

### 3️⃣ Setup Frontend

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

✅ Frontend running on: `http://localhost:5173`

### 4️⃣ Test the Application

- Open `http://localhost:5173` in browser
- Scroll through the portfolio
- Test contact form submission
- Check browser console for errors
- Verify backend logs for successful submissions

## 📋 MongoDB Setup

### Option A: Local MongoDB
```bash
# Install MongoDB Community Edition
# https://docs.mongodb.com/manual/installation/

# Start MongoDB service
# macOS:
brew services start mongodb-community

# Windows (if installed):
# Search "Services" > Start "MongoDB Server"

# Verify connection
mongosh mongodb://localhost:27017/yash-portfolio
```

### Option B: MongoDB Atlas (Cloud)
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/`
4. Add to `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/yash-portfolio
```

## 🧪 Testing Contact Form

1. Fill out contact form with valid data
2. Submit form
3. Check browser console for response
4. Verify in MongoDB:
```bash
mongosh
use yash-portfolio
db.contacts.find()
```

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
# Creates optimized build in dist/
```

### Deploy Frontend
- **Vercel**: Push to GitHub, connect repo
- **Netlify**: Same as Vercel
- **Any static host**: Upload `dist/` folder

### Deploy Backend
- **Heroku**: Connect GitHub repo, set env vars
- **Railway**: Similar to Heroku
- **AWS/GCP**: Follow platform guides

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Change ports in:
# Backend: backend/config/env.js (PORT variable)
# Frontend: frontend/vite.config.js (port: 5173)
```

### MongoDB Connection Error
- Check MongoDB is running
- Verify URI in .env
- Check username/password if using Atlas

### CORS Error
- Verify CORS_ORIGIN in .env matches frontend URL
- Check backend is running on correct port

### Tailwind CSS not loading
```bash
cd frontend
npm install
npm run dev
```

## 📚 Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/yash-portfolio
CORS_ORIGIN=http://localhost:5173
```

### Frontend
- No .env needed for development
- API calls go through proxy in `vite.config.js`

## 🎯 Next Steps

1. ✅ Get both servers running
2. ✅ Test contact form
3. ✅ Customize content (About, Skills, Projects)
4. ✅ Update social links
5. ✅ Deploy to production

## 📞 Commands Reference

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview built version
```

### Backend
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start normally
```

## ✨ Features to Explore

- Scroll animations (Framer Motion)
- Smooth navigation between sections
- Responsive mobile design
- Dark theme with neon accents
- Working contact form
- Timeline animations

---

**All set!** Your portfolio is ready to customize and deploy. 🎉
