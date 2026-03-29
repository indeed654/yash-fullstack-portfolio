# Yash Kumar Sharma - Portfolio Website

A premium, recruiter-grade personal portfolio showcasing expertise in AI/ML, cybersecurity, full-stack development, and IoT solutions.

## 🚀 Features

- **Stunning Dark Theme**: Futuristic cyberpunk design with neon accents
- **Smooth Animations**: Framer Motion for fluid page transitions and micro-interactions
- **Responsive Design**: Mobile-first approach, fully optimized for all devices
- **Contact Form**: Working backend integration with MongoDB
- **SEO Optimized**: Semantic HTML and meta tags for search engines
- **Production Ready**: Optimized builds with Vite and Tailwind CSS

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/       # React components (Hero, About, Skills, etc.)
│   │   ├── pages/           # Page components
│   │   ├── styles/          # Global CSS
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Root component
│   │   └── main.jsx         # Entry point
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   ├── vite.config.js       # Vite configuration
│   ├── tailwind.config.js   # Tailwind CSS config
│   └── index.html           # HTML template
│
├── backend/
│   ├── models/              # MongoDB schemas
│   ├── routes/              # API endpoints
│   ├── middleware/          # Custom middleware
│   ├── config/              # Configuration files
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── .env.example         # Environment template
│
└── README.md                # This file
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Nodemailer** - Email service (optional)

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Configure environment variables:
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/yash-portfolio
CORS_ORIGIN=http://localhost:5173
```

5. Start backend server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🌐 API Endpoints

### Contact Form
- **POST** `/contact` - Submit contact form
  - Request body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I'd like to discuss..."
    }
    ```
  - Response:
    ```json
    {
      "success": true,
      "message": "Message received!",
      "data": {
        "id": "...",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
    ```

- **GET** `/contact` - Retrieve all messages (admin only)

## 🎨 Design System

### Colors
- **Background**: `#0a0e27` (deep space)
- **Cards**: `#0f1535`
- **Text**: `#e1e8f0` (off-white)
- **Accents**: 
  - Cyan: `#00D9FF`
  - Purple: `#BC00FF`
  - Blue: `#0080FF`

### Typography
- **Headers**: Space Grotesk
- **Body**: Inter
- **Code**: JetBrains Mono

### Components
- Glow borders with cyan/purple accents
- Smooth hover transitions
- Micro-interactions on click
- Lazy loading for performance

## 📦 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
# Output: dist/
```

### Backend Deployment
- Deploy to Heroku, Vercel, or your preferred platform
- Set environment variables in deployment platform
- Ensure MongoDB is accessible

### Frontend Deployment
- Deploy `dist/` folder to Vercel, Netlify, or similar
- Update `CORS_ORIGIN` in backend for production domain

## 🔐 Security

- Input validation on both frontend and backend
- CORS protection
- Environment variables for sensitive data
- MongoDB schema validation
- Rate limiting recommended for production

## 📝 Customization

### Update Personal Information
- Edit component descriptions in `frontend/src/components/`
- Update social links in Footer
- Modify project details in Projects component

### Change Colors
- Edit `frontend/tailwind.config.js` brand colors
- Update `frontend/src/styles/globals.css` for custom animations

### Add New Sections
1. Create new component in `frontend/src/components/`
2. Import in `frontend/src/App.jsx`
3. Add navigation link in Navigation component

## 🚀 Performance Optimization

- **Vite**: Code splitting and lazy loading
- **Tailwind**: Purged unused CSS
- **Images**: Optimized and compressed
- **Animations**: GPU-accelerated with Framer Motion
- **Database**: Indexed MongoDB queries

## 📞 Support

For issues or questions, refer to the component files and their inline documentation.

## 📄 License

© 2024 Yash Kumar Sharma. All rights reserved.

---

**Status**: ✅ Production Ready | **Last Updated**: February 2026
