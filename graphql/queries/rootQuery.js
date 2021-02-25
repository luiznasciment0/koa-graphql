const { GraphQLObjectType } = require('graphql')

const queryAllGadgets = require('./queryAllGadgets')
const queryGadgetById = require('./queryGadgetById')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    queryAllGadgets,
    queryGadgetById,
  }
})

module.exports = RootQuery
