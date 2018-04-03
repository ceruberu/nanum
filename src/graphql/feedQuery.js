import gql from 'graphql-tag';

export default gql`
  query feedQuery($limit: Int!, $after: Cursor) {
    feedQuery(limit: $limit, after: $after) {
      edges {
        cursor
        node {
          _id
          title
          fromNow
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;