const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Unauthorized: Token missing or malformed' });
  }

  // ✅ Extract the token only
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // You can access user info in next middleware/route
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

module.exports = ensureAuthenticated;



// const jwt = require('jsonwebtoken');

// const ensureAuthenticated = (req, res, next) => {
//   const authHeader = req.headers['authorization'];

//   if (!authHeader) {
//     return res.status(403).json({ message: 'Unauthorized: JWT token required' });
//   }

//   // Extract token after "Bearer "
//   const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     console.error("JWT verify error:", err);
//     return res.status(403).json({ message: 'Unauthorized: Invalid or expired token' });
//   }
// };

// module.exports = ensureAuthenticated;
