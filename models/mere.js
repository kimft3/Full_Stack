const mongoose = require('mongoose');
const mereSchema = mongoose.Schema({
  story: {
    type: String,
    required: true,
  },
  punchLine: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Mere', mereSchema);
