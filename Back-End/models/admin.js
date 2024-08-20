const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin'], default: 'admin' },
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;
