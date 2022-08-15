/** @format */

import "../styles/globals.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

//create a apollo client server for Connect eoth graphQl and attached it with ApolloProvider
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://book-store-backend-taupe.vercel.app/graphql",
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
