const express = require('express')
const router = express.Router()
const apiCtrl = require('../controllers/controllers')
/* const auth = require('../middlewares/auth')
const images = require('../middlewares/images') */

router.get('/skills', apiCtrl.getAllSkills)
router.get('/projects', apiCtrl.getAllProjects)
router.get('/events', apiCtrl.getAllEvents)

router.post('/login', apiCtrl.login)

/* router.post('/', auth, images.upload, images.optimize, bookCtrl.createBook)
router.put('/:id', auth, images.upload, images.optimize, bookCtrl.modifyBook)
router.delete('/:id', auth, bookCtrl.deleteBook) */

module.exports = router
