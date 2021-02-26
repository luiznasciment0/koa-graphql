const path = require('path')
const dotenvSafe = require('dotenv-safe')

const cwd = process.cwd()
const root = path.join.bind(cwd)

console.log('cwd -----------', cwd)
console.log('ROOT -----------', root('.env'))

dotenvSafe.config({
  path: root('../.env'),
  sample: root('../.env.example'),
})

const ENV = process.env

const config = {
  MONGODB_URI: ENV.MONGODB_URI || '',
  PORT: ENV.PORT || 9000,
}

module.exports = config
