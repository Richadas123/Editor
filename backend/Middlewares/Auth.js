const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({ message: 'Unauthorized: Token missing or malformed' });
  }

  // Extracts the token only
  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // we can access user info in next middleware/route
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Unauthorized: Invalid or expired token' });
  }
};

module.exports = ensureAuthenticated;


