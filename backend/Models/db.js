
const mongoose = require('mongoose');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

mongoose.connect(process.env.MONGO_URI, {
  tls: true, // Ensures SSL is used
  ...(isDev && { tlsAllowInvalidCertificates: true }) // Only in dev for self-signed certs
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB Connection Error:", err));
