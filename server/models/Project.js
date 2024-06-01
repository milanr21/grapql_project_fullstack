const mongoose = require('mongoose');
import { STATUS } from '../enums/STATUS';

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
