const express = require('express');
const router = express.Router();
const { isAuthenticated, hasRole } = require('../middleware/auth');

// Protected route for all authenticated users
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.status(200).json({ message: 'Welcome to your dashboard!' });
});

// Protected route for admins only
router.get('/admin', isAuthenticated, hasRole('admin'), (req, res) => {
  res.status(200).json({ message: 'Admin dashboard' });
});

module.exports = router;