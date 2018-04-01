import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Card from './Card';

const FEED_QUERY = gql`
  {
    mainQuery {
      edges {
        cursor
        node {
          _id
          title
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const CardList = () => (
  <Query query={FEED_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="card-container">
          {data.mainQuery.edges.map(edge => <Card key={edge.node._id} item={edge.node} />)}
        </div>
      );
    }}
  </Query>
);

export default CardList;
