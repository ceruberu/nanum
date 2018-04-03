import gql from 'graphql-tag';

export default gql`
  query userQuery {
    user {
      isAuthenticated @client
    }
  }
`;