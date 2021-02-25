const { GraphQLList } = require('graphql')
const gadgetGraphQLType = require('../gadgetType')
const Gadget = require('../../models/gadgets')

module.exports = {
  type: new GraphQLList(gadgetGraphQLType),
  resolve(parent, args) {
    return Gadget.find({})
  }
}
