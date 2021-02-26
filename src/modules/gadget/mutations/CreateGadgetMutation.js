const { GraphQLString } = require('graphql')
const gadgetGraphQLType = require('../GadgetType')
const Gadget = require('../GadgetModel')

module.exports = {
  type: gadgetGraphQLType,
  args: {
    name: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    byCompany: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve(parent, args) {
    const newGadget = new Gadget({
      name: args.name,
      releaseDate: args.releaseDate,
      byCompany: args.byCompany,
      price: args.price,
    })

    return newGadget.save()
  },
}
