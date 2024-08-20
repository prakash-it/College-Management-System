const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  empolyid: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user', 'teacher'], default: 'teacher' },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
