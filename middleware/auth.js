// Authentication middleware
function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized: Please log in' });
}

// Role-based access control middleware
function hasRole(role) {
  return (req, res, next) => {
    if (req.session && req.session.userRole === role) {
      return next();
    }
    return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
  };
}

module.exports = { isAuthenticated, hasRole };