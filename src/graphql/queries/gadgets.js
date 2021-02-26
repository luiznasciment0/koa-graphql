const { GraphQLList } = require('graphql')
const GadgetType = require('../../modules/gadget/GadgetType')
const GadgetModel = require('../../modules/gadget/GadgetModel')

module.exports = {
  type: new GraphQLList(GadgetType),
  resolve(parent, args) {
    return GadgetModel.find({})
  }
}
