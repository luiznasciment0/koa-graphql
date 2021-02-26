const { GraphQLString } = require('graphql')
const gadgetGraphQLType = require('../GadgetType')
const Gadget = require('../GadgetModel')

module.exports = {
  type: gadgetGraphQLType,
  args: {
    id: { type: GraphQLString },
  },
  resolve(parents, args) {
    return Gadget.findOneAndDelete(args.id).exec()
      .then(gadget => gadget.remove())
      .then(deletedGadget => deletedGadget)
      .catch(err => console.log(err))
  }
}
