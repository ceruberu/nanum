import gql from 'graphql-tag';

export default gql`
  query modalQuery {
    modal @client
  }
`;
