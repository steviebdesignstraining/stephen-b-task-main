import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApollo } from '../lib/apolloClient';
import { UserProvider } from '../lib/userContext';

import LoginNotification from '../components/LoginNotification';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <LoginNotification />
        <Component {...pageProps} />
      </ApolloProvider>
    </UserProvider>
  );
}
