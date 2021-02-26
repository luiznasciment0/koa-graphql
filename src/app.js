const Koa = require('koa')
const graphqlHTTP = require('koa-graphql')
const cors = require('@koa/cors')
const mount = require('koa-mount')
const schema = require('./schema/schema')

const app = new Koa()

app.on('error', err => {
  log.error('server error', err)
})

app.use(cors())

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
})))

module.exports = app
