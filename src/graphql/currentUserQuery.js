import gql from 'graphql-tag';

export default gql`
  query currentUserQuery {
    currentUserQuery {
      _id
      facebookUserId 
      facebookEmail 
      isAuthenticated
      activated
      pictureUrl
    }
  }
`;

