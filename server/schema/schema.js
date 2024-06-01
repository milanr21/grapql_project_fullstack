const { sender, receiver } = require('../Data.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
} = require('graphql');

const recieverType = new GraphQLObjectType({
  name: 'reciever',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    email: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    reciever: {
      type: recieverType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return receiver.find((reciever) => reciever.id == args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
