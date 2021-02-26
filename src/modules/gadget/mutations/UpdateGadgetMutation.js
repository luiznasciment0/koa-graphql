const { GraphQLString } = require('graphql')
const gadgetGraphQLType = require('../GadgetType')
const Gadget = require('../GadgetModel')

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    releaseDate: { type: GraphQLString },
    byCompany: { type: GraphQLString },
    price: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Gadget.findById(args.id)
      .then(gadget => {
        gadget.name = args.name
        gadget.releaseDate = args.releaseDate
        gadget.byCompany = args.byCompany
        gadget.price = args.price

        return gadget.save()
      })
      .then(updatedGadget => updatedGadget)
      .catch(err => console.log(err))
  }
}
