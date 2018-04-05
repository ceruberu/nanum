import gql from 'graphql-tag';

export default gql`
  mutation ($email: String) {
    userSignup(email: $email) {
      _id
      email
      email_verified
    }
  }
`;
