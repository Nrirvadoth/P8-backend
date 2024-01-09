const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
  date: { type: String, required: true },
  event: { type: String, required: true },
  desc: { type: String, required: true },
})

module.exports = mongoose.model('Event', eventSchema)
