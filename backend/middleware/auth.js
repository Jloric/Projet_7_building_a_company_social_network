const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log('nous vérifions le token')
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN');
    const userId = decodedToken.userId;
    global.userId= userId;
    if (req.body.userId && req.body.userId != userId) {
      console.log('le token est invalide')
      throw 'Invalid user ID';
    } else {
      console.log('le token  est valide')
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error('Invalid request!')
    })
  }
};