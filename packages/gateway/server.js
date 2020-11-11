const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const queryResolvers = require('./queryResolvers');
const mutationResolvers = require('./mutationResolvers');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello(name: String): String
  }

  type User {
    username: String
    lastLoggedIn: String
  }

  type Session {
    token: String
    user: User
  }

  type Mutation {
    login(username: String!, password: String!): Session
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    ...queryResolvers,
  },
  Mutation: {
    ...mutationResolvers,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();

// enable cors for local development
app.use(cors());

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
