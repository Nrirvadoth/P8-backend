const mongoose = require('mongoose')

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  link: { type: String },
  tags: [
    { type: String }
  ],
})

module.exports = mongoose.model('Project', projectSchema)
