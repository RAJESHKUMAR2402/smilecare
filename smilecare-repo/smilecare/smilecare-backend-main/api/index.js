const mongoose = require('mongoose');
const app = require('../src/app');

// Reuse the DB connection across invocations (serverless-friendly)
let conn;

module.exports = async (req, res) => {
  try {
    if (!conn) conn = mongoose.connect(process.env.MONGODB_URI);
    await conn;
  } catch (err) {
    conn = undefined;
    console.error('MongoDB connection error:', err.message);
    return res.status(500).json({ message: 'Database connection failed' });
  }
  return app(req, res);
};
