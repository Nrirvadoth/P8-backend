const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    console.log("debut auth")
    const token = req.headers.authorization.split(' ')[1]
    const tokenDecoded = jwt.verify(token, 'OCP8-token_1548re58e')
    const userId = tokenDecoded.userId
    req.auth = { userId: userId }
    next()
    console.log("validation auth")
  } catch (error) {
    res.status(401).json({ error })
  }
}
