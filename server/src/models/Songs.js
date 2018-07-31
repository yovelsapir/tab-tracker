module.exports = function (sequelize, DataTypes) {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genere: DataTypes.STRING,
    album: DataTypes.STRING,
    albumImg: DataTypes.STRING,
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  })
  return Song
}
