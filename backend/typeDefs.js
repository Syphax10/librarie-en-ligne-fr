const { gql } = require("apollo-server-express");

// type title description authorName language price quantity status
const typeDefs = gql`
  type Store {
    id: ID
    type: String
    title: String
    description: String
    authorName: String
    language: String
    price: String
    quantity: String
    status: String
    image: String
  }
  type Query {
    getAll: [Store]
  }

  input StoreInput {
    id: ID
    type: String
    title: String
    description: String
    authorName: String
    language: String
    price: String
    quantity: String
    status: String
    image: String
  }
  type Mutation {
    getStore(page: String, limit: String): [Store]
    createStore(post: StoreInput): Store
    updateStore(id: String, post: StoreInput): Store
    deleteStore(id: String): String
  }
`;
//Functions which we perform in our project using GraphQL

module.exports = typeDefs;
