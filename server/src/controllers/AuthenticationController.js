const {
  User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const encrypt = jwt.sign({
    data: user
  }, config.authentication.jwtSecret, {
    expiresIn: '7d'
  })
  return encrypt
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.status(200).send(user.toJSON())
    } catch (err) {
      console.log(err)
      res.status(400).send({
        error: 'this email account is already use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })

      if (!user) {
        return res.status(403).send({
          error: 'The login infromation was incorrect'
        })
      }

      const isPasswordValid = await user.comparePassword(password)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'The login infromation was incorrect'
        })
      }

      const userJson = user.toJSON()

      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(400).send({
        error: 'An error has occured trying to log in'
      })
    }
  }
}
