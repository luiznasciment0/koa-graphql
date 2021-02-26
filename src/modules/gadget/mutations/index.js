const { GraphQLObjectType } = require('graphql')

const CreateGadgetMutation = require('./CreateGadgetMutation')
const UpdateGadgetMutation = require('./UpdateGadgetMutation')
const DeleteGadgetMutation = require('./DeleteGadgetMutation')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    CreateGadgetMutation,
    UpdateGadgetMutation,
    DeleteGadgetMutation
  }
})

module.exports = Mutation
