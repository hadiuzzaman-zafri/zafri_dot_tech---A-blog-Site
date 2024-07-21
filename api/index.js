import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';


dotenv.config();


console.log("MongoDB connection string:", process.env.MONGO); // Debugging line

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("The server is listening on port 3000!!");
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});