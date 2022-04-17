const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('nous vérifions le token')
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN');
    const userId = decodedToken.userId;
    global.userId= userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    });
  }
};