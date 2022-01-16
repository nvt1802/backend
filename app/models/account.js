const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountId: String,
  username: String,
  password: String,
  duration: Date,
  role: Number,
}, {
  versionKey: false,
});

module.exports = mongoose.model('account', accountSchema);
