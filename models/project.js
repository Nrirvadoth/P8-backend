const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  title: { type: String, required: true },
  thumbnail: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  tags: [
    { type: String }
  ],
})

module.exports = mongoose.model('Project', projectSchema)
