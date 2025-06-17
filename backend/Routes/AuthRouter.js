

const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');
const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

// Signup route
router.post('/signup', signupValidation, signup);

// Login route
router.post('/login', loginValidation, login);

// Token verification route for frontend use 
router.get('/verify', ensureAuthenticated, (req, res) => {
  return res.status(200).json({ success: true });
});

module.exports = router;
