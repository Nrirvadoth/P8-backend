const Event = require('../models/event')
const Skill = require('../models/skill')
const Project = require('../models/project')

exports.getAllSkills = (req, res, next) => {
  Skill.find()
    .then((skills) => {
      res.status(200).json(skills)
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}

exports.getAllEvents = (req, res, next) => {
  Event.find()
    .then((events) => {
      res.status(200).json(events)
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}

exports.getAllProjects = (req, res, next) => {
  Project.find()
    .then((projects) => {
      res.status(200).json(projects)
    })
    .catch((error) => {
      res.status(400).json({ error })
    })
}
