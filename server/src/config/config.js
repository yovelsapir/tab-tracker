module.exports = {
  port: process.env.PORT || 8084,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASSWORD || 'tabtracker',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.jwtSecret || ';x#w65Sz~asd2JTxx%e73-f3>Vu135q>s[+WNo2f%6iW#{sdz&{u@,3$u)A4%jGK1S`sa/{*A'
  }
}
