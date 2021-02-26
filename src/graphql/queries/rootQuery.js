const { GraphQLObjectType } = require('graphql')

const gadgets = require('./gadgets')
const gadgetById = require('./gadgetById')

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    gadgets,
    gadgetById,
  }
})

module.exports = RootQuery
