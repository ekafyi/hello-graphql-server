import { ApolloServer, gql } from "apollo-server-lambda";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello serverless server",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true, // enable GraphQL Playground IDE on prod env
});

exports.handler = server.createHandler();
