// middleware/auth.js

module.exports = function (req, res, next) {
    const apiKey = req.headers['x-api-key'];
    const validKey = process.env.API_KEY;
  
    if (!apiKey || apiKey !== validKey) {
      return res.status(401).json({ message: 'Unauthorized. Invalid API key.' });
    }
  
    next();
  };
  
  