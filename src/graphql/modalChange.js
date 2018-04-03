import gql from 'graphql-tag';

export default gql`
  mutation modalChange($modal: String) {
    modalChange(modal: $modal) @client
  }
`;
