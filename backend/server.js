/** @format */

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
// import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

//Database Connection
const URL =
  "mongodb+srv://book-store:(12BookStore@cluster0.ah0abhz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("DB CONNECTED")
);

//Set Server for backend with GraphQl and Express
const startServer = async () => {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.listen(4000, () => console.log("Server UP & Running *4000"));
};
//call startServer function for runing the function
startServer();
