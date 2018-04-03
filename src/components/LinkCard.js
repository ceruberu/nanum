import React from 'react';
import { Query } from 'react-apollo';
import Waypoint from 'react-waypoint';
import gql from 'graphql-tag';
import Card from './Card';

const FEED_QUERY = gql`
  query ($limit: Int!, $after: Cursor){
    itemFeed(limit: $limit, after: $after) {
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

const CardList = () => (
  <Query query={FEED_QUERY} variables={{limit: 20}}> 
    {({ loading, error, data, fetchMore }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="card-container">
          {data.itemFeed.edges.map(edge => <Card key={edge.node._id} item={edge.node} />)}
          {
            data.itemFeed.pageInfo.hasNextPage && 
            <Waypoint
              onEnter={()=>{
                fetchMore({
                  variables: {
                    after: data.itemFeed.pageInfo.endCursor
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                      itemFeed: {
                        __typename: previousResult.itemFeed.__typename,
                        edges: [...previousResult.itemFeed.edges, ...fetchMoreResult.itemFeed.edges],
                        pageInfo: fetchMoreResult.itemFeed.pageInfo
                      }
                    };
                  }
                })
              }}
            />
          }
          
        </div>
      );
    }}
  </Query>
);

export default CardList;
