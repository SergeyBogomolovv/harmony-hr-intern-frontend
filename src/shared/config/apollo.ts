import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  fromPromise,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, SERVER_URL } from "../constants";
import { RefreshDocument } from "../graphql/graphql";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = new HttpLink({
  uri: SERVER_URL,
});

const getNewToken = async () => {
  try {
    const { access_token, refresh_token } = (
      await client.query({ query: RefreshDocument })
    ).data.refreshToken;
    if (access_token && refresh_token) {
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
      localStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
    }
    return access_token;
  } catch (error) {
    return null;
  }
};

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      switch (err.extensions?.code) {
        case "UNAUTHENTICATED":
          if (operation.operationName === "Refresh") return;
          return fromPromise(
            getNewToken().then((token) => {
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  authorization: `Bearer ${token}`,
                },
              });
            }),
          ).flatMap(() => {
            return forward(operation);
          });
      }
    }
  }
});

const client = new ApolloClient({
  link: from([errorLink, authLink, link]),
  cache: new InMemoryCache(),
  ssrMode: typeof window === "undefined",
});

export default client;
