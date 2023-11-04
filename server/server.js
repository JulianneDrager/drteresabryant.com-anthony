const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('morgan');
const connectDB = require('./config/database');
require('dotenv').config();

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(logger('dev'));

// Routers
const adminRouter = require('./routes/adminRouter');
const galleryRouter = require('./routes/galleryRouter');

app.use('/admin', adminRouter);
app.use('/gallery', galleryRouter);



app.listen(process.env.PORT, () => console.log(`Server running on port: ${process.env.PORT}`));