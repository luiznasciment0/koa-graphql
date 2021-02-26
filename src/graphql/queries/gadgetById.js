const { GraphQLString } = require('graphql')
const GadgetType = require('../../modules/gadget/GadgetType')
const GadgetModel = require('../../modules/gadget/GadgetModel')

module.exports = {
  type: GadgetType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return GadgetModel.findById(args.id)
  }
}
