import gql from 'graphql-tag';

export default gql`
  query currentUserQuery {
    currentUserQuery {
      _id
      email
      facebookID 
      isAuthenticated
      pictureUrl
    }
  }
`;

