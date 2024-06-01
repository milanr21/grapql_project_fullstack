const Project = require('../models/Project');
const Client = require('../models/Client');
const STATUS = require('../enums/STATUS');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLEnumType,
} = require('graphql');

const ProjectStatus = new GraphQLEnumType({
  name: 'ProjectStatus',
  values: {
    NOT_STARTED: { value: STATUS.NOT_STARTED },
    IN_PROGRESS: { value: STATUS.IN_PROGRESS },
    COMPLETED: { value: STATUS.COMPLETED },
  },
});

const ProjectUpdateStatus = new GraphQLEnumType({
  name: 'ProjectUpdateStatus',
  values: {
    NOT_STARTED: { value: STATUS.NOT_STARTED },
    IN_PROGRESS: { value: STATUS.IN_PROGRESS },
    COMPLETED: { value: STATUS.COMPLETED },
  },
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: ProjectStatus },
    client: {
      type: ClientType,
      resolve(parent, args) {
        return Client.findById(parent.clientId);
      },
    },
  }),
});

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phoneNo: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find();
      },
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve(parent, args) {
        return Client.find();
      },
    },

    project: {
      type: ProjectType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return Project.findById(args.id);
      },
    },

    //query to get the reciever by id

    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

// Mutations
// Adding a  client
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        phoneNo: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phoneNo: args.phoneNo,
        });

        return client.save();
      },
    },

    deleteClient: {
      type: ClientType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Client.findByIdAndDelete(args.id);
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },

        status: {
          type: ProjectStatus,
          defaultValue: STATUS.NOT_STARTED,
        },

        clientId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
          clientId: args.clientId,
        });
        return project.save();
      },
    },
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Project.findByIdAndDelete(args.id);
      },
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: ProjectUpdateStatus },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
