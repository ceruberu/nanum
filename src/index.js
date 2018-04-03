import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// APOLLO 
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const cache = new InMemoryCache();

const defaultState = {
  modal: false,
  user: {
    isAuthenticated: false,
    __typename: 'user'
  }
};

const stateResolvers = {
  Mutation: {
    modalChange: (_, { modal }, { cache }) => {
      const data = {
        modal
      };
      cache.writeData({ data });
      return null;
    }
  }
}

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: stateResolvers
});

const authLink = setContext((_, { headers }) => {
  console.log("HEADERS:::", _, headers);
  const token = localStorage.getItem('token');
  console.log("AUTH LINK: TOKEN::", token);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const link = ApolloLink.from([
  authLink,
  stateLink,
  new HttpLink({ 
    uri: 'http://localhost:4000/graphql',
  })
]);

const client = new ApolloClient({
  link,
  cache,
  connectToDevTools: true
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>

), document.getElementById('root'));
registerServiceWorker();