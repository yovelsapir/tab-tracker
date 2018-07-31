const {
  Song
} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.status(200).send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to fetch the songs.'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.status(200).send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occurred trying to create the song.'
      })
    }
  }
}
