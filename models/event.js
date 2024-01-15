const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  date: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
})

module.exports = mongoose.model('Event', eventSchema)
