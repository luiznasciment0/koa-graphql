const Koa = require('koa')
const graphqlHTTP = require('koa-graphql')
const mount = require('koa-mount')
const cors = require('@koa/cors')
const schema = require('./graphql/schema')
const initDB = require('./database')
require('dotenv').config()

initDB()

const app = new Koa()


app.listen(process.env.PORT || 9000)

app.use(cors())

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
})))

app.on('error', err => {
  log.error('server error', err)
})
