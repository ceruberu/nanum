import gql from 'graphql-tag';

export default gql`
  mutation ($facebookToken: String!) {
    authenticateFacebookUser(facebookToken: $facebookToken)
  }
`;
