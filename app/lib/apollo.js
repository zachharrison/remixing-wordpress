import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://fightinsights-net.preview-domain.com/graphql',
  cache: new InMemoryCache(),
});
