const { ApolloServer, gql } = require('apollo-server-lambda');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
  playground: true // enable GraphQL Playground IDE on prod env
});

exports.handler = server.createHandler(); 