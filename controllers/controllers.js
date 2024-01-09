const Event = require('../models/event')
const Skill = require('../models/skill')
const Project = require('../models/project')
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

exports.login = (req, res, next) => {
    console.log(req.body)
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user === null) {
        res.status(401).json({ message: 'Idenfiant/mot de passe incorrect' })
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              res
                .status(401)
                .json({ message: 'Idenfiant/mot de passe incorrect' })
            } else {
              res.status(200).json({
                userId: user._id,
                token: jwt.sign({ userId: user._id }, 'OCP8-token_1548re58e', {
                  expiresIn: '24h',
                }),
              })
            }
          })
          .catch((error) => {
            res.status(500).json(error)
          })
      }
    })
    .catch((error) => {
      res.status(500).json(error)
    })
}
