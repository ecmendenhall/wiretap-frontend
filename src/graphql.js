import React from "react";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

const httpLink = createHttpLink({
  uri: "https://wiretap-backend.herokuapp.com/api/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("wiretap.token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
});

cache.writeData({
  data: {
    auth: {
      __typename: "Auth",
      authenticated: !!localStorage.getItem("wiretap.token"),
      errorMessage: null
    }
  }
});

const GraphQLProvider = props => (
  <ApolloProvider client={client}>{props.children}</ApolloProvider>
);

export default GraphQLProvider;
