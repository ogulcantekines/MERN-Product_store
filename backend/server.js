import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/product.model.js';
import mongoose from 'mongoose';
import productRoutes from './routes/product.route.js';
import path from 'path';

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", productRoutes);

// Development mode - sadece API
if (process.env.NODE_ENV == "development") {
  app.get('/', (req, res) => {
    res.json({
      message: "🚀 Product Store API - Development Mode",
      status: "Backend running on port 5000",
      frontend: "Frontend should run on http://localhost:5173 (npm run dev in frontend folder)",
    });
  });
}

// Production mode - serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  // /api ile başlamayan tüm route'ları React SPA'ya yönlendir
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });

}

app.listen(PORT, () => {
  // Connect to MongoDB
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
