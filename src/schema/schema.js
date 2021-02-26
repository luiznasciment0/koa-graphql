const { GraphQLSchema } = require('graphql')

const Mutations = require('../modules/gadget/mutations')
const RootQuery = require('../graphql/queries/rootQuery')

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})
