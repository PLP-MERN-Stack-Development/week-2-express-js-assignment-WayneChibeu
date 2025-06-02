// middleware/logger.js

const logger = (req, res, next) => {
    const now = new Date();
    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
  module.exports = logger;
  