const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const tokenDecoded = jwt.verify(token, 'OCP8-token_1548re58e')
    const userId = tokenDecoded.userId
    req.auth = { userId: userId }
    next()
  } catch {
    res.status(401).json({ error })
  }
}
