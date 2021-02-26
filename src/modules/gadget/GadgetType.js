const graphql = require('graphql')

const { GraphQLObjectType, GraphQLString } = graphql

const GadgetType = new GraphQLObjectType({
  name: 'Gadget',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    byCompany: { type: GraphQLString },
    price: { type: GraphQLString },
  })
})

module.exports = GadgetType
