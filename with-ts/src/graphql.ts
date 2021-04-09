import { ApolloServer, gql } from "apollo-server-lambda";

const shout = (msg: string) => {
  return `${msg.toUpperCase()}!!!!`
}

const typeDefs = gql`
  type Query {
    hello(name: String): String
  }
`;

const resolvers = {
  Query: {
    hello: (_parent, args) => shout(`Hello ${args.name || 'serverless server'}`),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // enable GraphQL Playground IDE on prod env
});

exports.handler = server.createHandler();
