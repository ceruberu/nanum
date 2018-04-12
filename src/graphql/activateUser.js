import gql from 'graphql-tag';

export default gql`
  mutation activateUser($username: String!) {
    activateUser(username: $username) {
      _id
      username
    }
  }
`;
