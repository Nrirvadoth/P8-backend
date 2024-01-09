const mongoose = require('mongoose')

const skillSchema = mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  score: { type: Number, required: true }
})

module.exports = mongoose.model('Skill', skillSchema)