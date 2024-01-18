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

router.post('/skills', auth, images.multerMiddleware, images.firebaseUpload, apiCtrl.addSkill)
router.post('/projects', auth, images.multerMiddleware, images.firebaseUpload, apiCtrl.addProject)
router.post('/events', auth, apiCtrl.addEvent)
router.post('/messages', apiCtrl.sendMessage)

module.exports = router
