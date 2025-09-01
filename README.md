# �️ MERN Product Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-green.svg)](https://mongodb.com/)

> **Modern and responsive MERN Stack product management system. Full-stack CRUD operations, real-time updates and production-ready deployment support.**

## 🎯 Demo

🔗 **Live Demo:** [MERN Product Store on Render](https://mern-product-store-1a0t.onrender.com)

## ✨ Key Features

- ✅ **Full CRUD Operations** - Add, view, update and delete products
- 🎨 **Modern UI/UX** - Responsive design with Chakra UI
- 🌙 **Dark/Light Mode** - Theme switching with user preference
- 🔔 **Real-time Feedback** - Toast notifications
- 📊 **State Management** - Global state management with Zustand
- 🚀 **RESTful API** - Powerful backend with Express.js
- 💾 **MongoDB Integration** - NoSQL database support
- 🔄 **Development Proxy** - Seamless frontend-backend integration
- 📦 **Production Ready** - Single server deployment support
- 🎭 **Error Handling** - Comprehensive error management


## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Vite** - Lightning fast build tool
- **Chakra UI** - Simple, modular and accessible component library
- **Zustand** - Lightweight state management
- **React Router DOM** - Client-side routing
- **React Icons** - Popular icon library
- **Framer Motion** - Production-ready motion library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js 5.1.0** - Fast, minimalist web framework
- **MongoDB** - NoSQL document database
- **Mongoose 8.18.0** - MongoDB object modeling

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Proxy** - Development server proxy
- **dotenv** - Environment variables management
- **cross-env** - Cross-platform environment scripts
- **nodemon** - Auto-restart development server


## 🚀 Installation and Setup

### ⚡ Prerequisites

Before starting, make sure you have these installed:

- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **MongoDB Atlas Account** (Free) - [Sign up here](https://www.mongodb.com/cloud/atlas)

### 📥 Step 1: Clone the Project

```bash
# Clone the repository
git clone https://github.com/ogulcantekines/MERN-Product_store.git
cd MERN-Product_store

# Install root dependencies
npm install
```

### �️ Step 2: Setup MongoDB Atlas Database

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for a free account
   
2. **Create a New Cluster**
   - Click "Create" button
   - Choose "M0 Sandbox" (Free tier)
   - Select a region close to you
   - Click "Create Cluster"

3. **Create Database User**
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (remember these!)
   - Set "Built-in Role" to "Read and write to any database"
   - Click "Add User"

4. **Setup Network Access**
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Clusters" and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### 🔧 Step 3: Environment Setup

Create a `.env` file in the **backend** directory (not in root!):

```bash
# Navigate to backend folder
cd backend

# Create .env file (Windows)
echo. > .env

# OR create .env file (Mac/Linux)
touch .env
```

Add these contents to your `.env` file:

```env
# Replace with your MongoDB Atlas connection string
MONGODB_URI=mongodb+srv://your-username:your-password@cluster0.xxxxx.mongodb.net/productstore?retryWrites=true&w=majority

# Server port
PORT=5000

# Environment
NODE_ENV=development
```

**⚠️ Important:** Replace `your-username`, `your-password`, and `cluster0.xxxxx` with your actual MongoDB Atlas credentials!

### 💻 Step 4: Run Development Mode

```bash
# Go back to root directory
cd ..

# Method 1: Run both frontend and backend together (Recommended)
npm run dev

# This will start:
# - Backend server on http://localhost:5000
# - Frontend development server on http://localhost:5173
```

**Alternative Method (Separate terminals):**
```bash
# Terminal 1: Backend server
cd backend
npm run dev

# Terminal 2: Frontend server (open new terminal)
cd frontend
npm run dev
```

### 🌐 Step 5: Access the Application

- **Frontend (User Interface)**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Test API**: Go to http://localhost:5000 in browser (should show welcome message)

### 🏭 Step 6: Production Build (Optional)

For production deployment:

```bash
# Build frontend and start production server
npm run build
npm run prod

# Application will run on http://localhost:5000
```

## 📂 Project Structure

```
MERN-Product_store/
├── 📁 backend/                 # Node.js Backend
│   ├── 📁 config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── 📁 controllers/
│   │   └── product.controller.js  # Business logic
│   ├── 📁 models/
│   │   └── product.model.js    # Mongoose schemas
│   ├── 📁 routes/
│   │   └── product.route.js    # API route definitions
│   └── server.js              # Express server entry point
├── 📁 frontend/               # React Frontend
│   ├── 📁 public/
│   │   ├── product.svg
│   │   └── vite.svg
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── 📁 pages/          # Page components
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── 📁 store/          # Zustand store
│   │   │   └── product.js
│   │   ├── App.jsx            # Main App component
│   │   └── main.jsx           # React entry point
│   ├── eslint.config.js       # ESLint configuration
│   ├── package.json
│   └── vite.config.js         # Vite configuration
├── package.json               # Root package.json
├── LICENSE                    # MIT License
└── README.md                  # This file
```

## 🔧 Troubleshooting

### Common Issues and Solutions

<details>
<summary>❌ "MongoDB connection failed" error</summary>

**Problem:** Cannot connect to MongoDB Atlas

**Solutions:**
1. Check your `.env` file is in the `backend` directory (not root)
2. Verify your MongoDB Atlas connection string is correct
3. Make sure you replaced `<password>` with your actual password
4. Check if your IP address is whitelisted in MongoDB Atlas
5. Ensure your cluster is running (not paused)

```bash
# Test your connection string format:
mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/productstore?retryWrites=true&w=majority
```
</details>

<details>
<summary>❌ "Port 5000 already in use" error</summary>

**Problem:** Another application is using port 5000

**Solutions:**
1. Kill the process using port 5000:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

2. Or change the port in your `.env` file:
```env
PORT=3001
```
</details>

<details>
<summary>❌ "npm run dev" not working</summary>

**Problem:** Development server won't start

**Solutions:**
1. Make sure you're in the root directory
2. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

3. Check if all required packages are installed
4. Try running backend and frontend separately
</details>

<details>
<summary>❌ Frontend not connecting to backend</summary>

**Problem:** API calls failing, "Network Error"

**Solutions:**
1. Make sure backend is running on port 5000
2. Check Vite proxy configuration in `frontend/vite.config.js`
3. Verify the proxy target is correct:
```javascript
server: {
  proxy: {
    "/api": {
      target: "http://localhost:5000",
      changeOrigin: true,
    }
  },
}
```
</details>

<details>
<summary>❌ Production build issues</summary>

**Problem:** `npm run build` or `npm start` failing

**Solutions:**
1. Make sure frontend builds successfully:
```bash
cd frontend
npm run build
```

2. Check if `frontend/dist` folder is created
3. Verify environment variables in production:
```env
NODE_ENV=production
MONGODB_URI=your-atlas-connection-string
PORT=5000
```
</details>

### 📞 Need Help?

If you're still having issues:
1. Check the [Issues](https://github.com/ogulcantekines/MERN-Product_store/issues) tab
2. Create a new issue with:
   - Your operating system
   - Node.js version (`node --version`)
   - Error message
   - Steps you've tried

## 🔌 API Endpoints

### Products API

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/api/products` | Get all products | - |
| `POST` | `/api/products` | Create new product | `{name, price, image}` |
| `PUT` | `/api/products/:id` | Update product | `{name, price, image}` |
| `DELETE` | `/api/products/:id` | Delete product | - |

### 📋 API Usage Examples

<details>
<summary>JavaScript Fetch API Examples</summary>

```javascript
// Get all products
const getProducts = async () => {
  const response = await fetch('/api/products');
  const products = await response.json();
  return products;
};

// Create new product
const createProduct = async (productData) => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'iPhone 15',
      price: 999.99,
      image: 'https://example.com/iphone15.jpg'
    })
  });
  return response.json();
};

// Update product
const updateProduct = async (id, updates) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updates)
  });
  return response.json();
};

// Delete product
const deleteProduct = async (id) => {
  const response = await fetch(`/api/products/${id}`, {
    method: 'DELETE'
  });
  return response.json();
};
```

</details>

### 📊 MongoDB Product Schema

```javascript
{
  _id: ObjectId,
  name: String (required),
  price: Number (required),
  image: String (required),
  createdAt: Date,
  updatedAt: Date
}
```

## 📱 Screenshots

> **Note:** Screenshots will be added

<details>
<summary>Application Images</summary>

### 🏠 Home Page
![Home Page](./screenshots/homepage.png)

### ➕ Create Product Page  
![Create Product](./screenshots/create-page.png)

### 🌙 Dark Mode
![Dark Mode](./screenshots/dark-mode.png)

### 📱 Mobile Responsive
![Mobile View](./screenshots/mobile-view.png)

</details>

## 🚀 Deployment

### � Render.com Deployment (Recommended)

Render.com is a modern cloud platform that offers excellent performance and easy deployment for full-stack applications.

**Steps to deploy:**

1. **Create Render Account**
   - Sign up at [render.com](https://render.com)
   - Connect your GitHub account

2. **Create Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Choose `MERN-Product_store` repo

3. **Configure Build Settings**
   ```
   Name: mern-product-store (or your choice)
   Environment: Node
   Region: Choose closest to your users
   Branch: main
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

4. **Add Environment Variables**
   ```
   MONGODB_URI=your-mongodb-atlas-connection-string
   NODE_ENV=production
   PORT=5000
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically build and deploy your app
   - You'll get a live URL like: `https://your-app-name.onrender.com`

**🔗 Live Demo:** [Your deployed app URL here]

---

### 📊 MongoDB Atlas Setup

1. Create [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
2. Create cluster (Free tier)
3. Add database user
4. Configure Network Access (0.0.0.0/0 for production)
5. Copy connection string and add to `.env` file

## 🤝 Contributing

If you want to contribute to the project:

1. 🍴 **Fork** the project
2. 🌟 Create **feature branch** (`git checkout -b feature/NewFeature`)
3. 💾 **Commit** your changes (`git commit -m 'Add new feature: Description'`)
4. 📤 **Push** to branch (`git push origin feature/NewFeature`)
5. 🔄 Open **Pull Request**

### 📝 Development Guidelines

- Write code following ESLint rules
- Write descriptive commit messages
- Write tests for each feature (to be added in future)
- Don't forget README updates

## 🐛 Bug Report & 💡 Feature Request

From [Issues](https://github.com/ogulcantekines/MERN-Product_store/issues) tab:
- 🐛 Report bugs
- 💡 Suggest new features
- ❓ Ask your questions

## � Roadmap

- [ ] 🔐 User Authentication & Authorization
- [ ] 📦 Category Management
- [ ] 🔍 Advanced Search & Filters  
- [ ] 📊 Analytics Dashboard
- [ ] 🛒 Shopping Cart Functionality
- [ ] 💳 Payment Integration
- [ ] 📧 Email Notifications
- [ ] 🌍 Multi-language Support
- [ ] 📱 Mobile App (React Native)
- [ ] 🧪 Unit & Integration Tests

## 📄 License

This project is licensed under **MIT License**. See [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Oğulcan Tekineş**

- 🐙 **GitHub:** [@ogulcantekines](https://github.com/ogulcantekines)
- 💼 **LinkedIn:** [Oğulcan Tekineş](https://linkedin.com/in/ogulcantekines)
- 📧 **Email:** ogulcantekines@gmail.com
- 🌐 **Portfolio:** [ogulcantekines.dev](https://ogulcantekines.dev) _(Coming Soon)_

## ⭐ Support

If this project helped you, don't forget to give it a ⭐!

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Chakra UI](https://chakra-ui.com/) - Component library  
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [Express.js](https://expressjs.com/) - Backend framework
- [MongoDB](https://www.mongodb.com/) - Database

---

<div align="center">

**Made with ❤️ and lots of ☕ by [Oğulcan Tekineş](https://github.com/ogulcantekines)**

<sub>⚡ Full-Stack Developer | 🚀 MERN Stack Enthusiast</sub>

</div>