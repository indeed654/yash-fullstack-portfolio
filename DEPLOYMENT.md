# Deployment Guide

## 🌐 Frontend Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select "frontend" as root directory
   - Add environment variables (if needed)
   - Deploy

3. **Environment Variables**
   ```
   VITE_API_URL=https://your-backend.herokuapp.com/api
   ```

### Option 2: Netlify

1. **Build frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop `frontend/dist/` folder
   - Or use Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

3. **Add environment variables**
   - Site settings > Build & deploy > Environment
   - Add `VITE_API_URL`

### Option 3: AWS S3 + CloudFront

1. **Build**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Create S3 bucket
   - Upload `dist/` contents
   - Enable static website hosting

3. **Setup CloudFront**
   - Create distribution pointing to S3
   - Configure cache settings

## 🔧 Backend Deployment

### Option 1: Heroku

1. **Create Heroku account** and install CLI

2. **Deploy**
   ```bash
   cd backend
   heroku login
   heroku create your-app-name
   heroku config:set MONGODB_URI=your-atlas-uri
   heroku config:set NODE_ENV=production
   git push heroku main
   ```

3. **Monitor logs**
   ```bash
   heroku logs --tail
   ```

### Option 2: Railway

1. **Connect GitHub** at railway.app

2. **Configure variables**
   - Set environment variables in Railway dashboard
   - MONGODB_URI, PORT, NODE_ENV, etc.

3. **Deploy**
   - Push to GitHub, Railway auto-deploys

### Option 3: AWS EC2

1. **Launch EC2 instance** (Ubuntu)

2. **Install dependencies**
   ```bash
   sudo apt-get update
   sudo apt-get install nodejs npm mongodb
   ```

3. **Setup application**
   ```bash
   git clone your-repo
   cd backend
   npm install
   ```

4. **Run with PM2** (process manager)
   ```bash
   npm install -g pm2
   pm2 start server.js --name "portfolio-api"
   pm2 startup
   pm2 save
   ```

5. **Setup nginx** as reverse proxy

## 🗄️ MongoDB Setup

### Use MongoDB Atlas (Cloud)

1. **Create account** at mongodb.com/cloud/atlas

2. **Create cluster**
   - Free tier available
   - Choose region close to users

3. **Get connection string**
   - Click "Connect"
   - Copy connection string
   - Replace `<password>` with actual password

4. **Add to environment variables**
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/yash-portfolio
   ```

## 📋 Pre-Deployment Checklist

- [ ] Update API_URL in frontend config
- [ ] Verify CORS_ORIGIN in backend .env
- [ ] Test contact form in staging
- [ ] Add MongoDB validation indexes
- [ ] Enable HTTPS/SSL
- [ ] Setup monitoring (Sentry, DataDog)
- [ ] Configure backup for MongoDB
- [ ] Add environment-specific configs
- [ ] Test on production database
- [ ] Add rate limiting to API
- [ ] Setup CDN for static assets

## 🔐 Production Security

### Frontend
```javascript
// Ensure API calls use HTTPS
const API_URL = 'https://api.yashkumarsharma.com'
```

### Backend
```javascript
// In .env
NODE_ENV=production
CORS_ORIGIN=https://yashkumarsharma.com
```

### Database
- Enable authentication
- Whitelist IP addresses
- Regular backups
- Enable encryption at rest

## 🚀 Production Performance

### Frontend
- Enable gzip compression
- Minify CSS/JS (Vite does this)
- Optimize images
- Enable caching headers
- Use CDN for assets

### Backend
- Enable Redis caching
- Add rate limiting
- Setup memory monitoring
- Configure auto-scaling
- Enable load balancing

## 📊 Monitoring

### Tools
- **Vercel Analytics** - Frontend metrics
- **New Relic** - Backend monitoring
- **Sentry** - Error tracking
- **MongoDB Atlas** - Database metrics

### Setup
1. Create accounts on monitoring platforms
2. Add SDK/agent to applications
3. Configure alerts
4. Review dashboards regularly

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd backend && npm install && npm test
      - run: cd frontend && npm install && npm run build
```

## 📞 Post-Deployment

1. **Verify all pages load**
2. **Test contact form**
3. **Check mobile responsiveness**
4. **Verify social links**
5. **Test analytics tracking**
6. **Monitor error logs**

---

**Deployment Check**: ✅ Production Ready
