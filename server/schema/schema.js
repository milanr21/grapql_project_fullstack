const { sender, receiver } = require('../Data.js');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require('graphql');

const senderType = new GraphQLObjectType({
  name: 'sender',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    email: { type: GraphQLString },
    status: { type: GraphQLString },
    receiver: {
      type: recieverType,
      resolve(parent, args) {
        return receiver.find((reciever) => reciever.id == parent.receiverId);
      },
    },
  }),
});

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
    senders: {
      type: new GraphQLList(senderType),
      resolve(parent, args) {
        return sender;
      },
    },
    recievers: {
      type: new GraphQLList(recieverType),
      resolve(parent, args) {
        return receiver;
      },
    },

    sender: {
      type: senderType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return sender.find((sender) => sender.id == args.id);
      },
    },

    //query to get the reciever by id

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
