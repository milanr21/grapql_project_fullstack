const STATUS = require('../enums/STATUS');
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },

  status: {
    type: String,
    enum: Object.values(STATUS),
  },

  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
