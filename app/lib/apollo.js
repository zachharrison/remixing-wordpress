import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'URL HERE',
  cache: new InMemoryCache(),
});
