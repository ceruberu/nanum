import React from 'react';
import ReactDOM from 'react-dom';

// APOLLO 
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// REDUX
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const httpLink = new HttpLink({ 
  uri: 'http://localhost:4000/graphql',
});
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>

), document.getElementById('root'));
registerServiceWorker();
