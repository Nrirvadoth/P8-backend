const express = require('express')
const router = express.Router()
const apiCtrl = require('../controllers/controllers')
const auth = require('../middlewares/auth')
const images = require('../middlewares/images')

router.get('/skills', apiCtrl.getAllSkills)
router.get('/projects', apiCtrl.getAllProjects)
router.get('/events', apiCtrl.getAllEvents)
router.get('/messages', auth, apiCtrl.getAllMessages)

router.post('/login', apiCtrl.login)

router.post('/skills/add', auth, images.upload, images.optimize, apiCtrl.addSkill)
router.post('/projects/add', auth, images.upload, images.optimize, apiCtrl.addProject)
router.post('/events/add', auth, apiCtrl.addEvent)
router.post('/messages/add', apiCtrl.sendMessage)

module.exports = router
