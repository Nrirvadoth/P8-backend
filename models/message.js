const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  object: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: String, required: true },
})

module.exports = mongoose.model('Message', messageSchema)
