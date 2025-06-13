// const mongoose = require('mongoose');

// const mongo_url = process.env.MONGO_URI;

// mongoose.connect(mongo_url)
//     .then(() => {
//         console.log('MongoDB Connected...');
//     }).catch((err) => {
//         console.log('MongoDB Connection Error: ', err);
//     })



// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   tlsAllowInvalidCertificates: true, // 🔥 This fixes SSL errors in dev
// })
// .then(() => console.log("MongoDB connected successfully"))
// .catch((err) => console.error("MongoDB Connection Error:", err));



const mongoose = require('mongoose');
require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

mongoose.connect(process.env.MONGO_URI, {
  tls: true, // Ensures SSL is used
  ...(isDev && { tlsAllowInvalidCertificates: true }) // Only in dev for self-signed certs
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch((err) => console.error("❌ MongoDB Connection Error:", err));
