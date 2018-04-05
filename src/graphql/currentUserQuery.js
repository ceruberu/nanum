import gql from 'graphql-tag';

export default gql`
  query currentUserQuery($token: String!) {
    currentUserQuery(token: $token) {
      _id
      facebookUserId
      facebookEmail
      isAuthenticated
      pictureUrl
    }
  }
`;