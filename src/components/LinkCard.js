import React from 'react';
import { Query } from 'react-apollo';
import Waypoint from 'react-waypoint';
import gql from 'graphql-tag';
import Card from './Card';

const FEED_QUERY = gql`
  query ($limit: Int!, $after: Cursor){
    mainQuery(limit: $limit, after: $after) {
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
  <Query query={FEED_QUERY} variables={{limit: 20}}> 
    {({ loading, error, data, fetchMore }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="card-container">
          {data.mainQuery.edges.map(edge => <Card key={edge.node._id} item={edge.node} />)}
          {
            data.mainQuery.pageInfo.hasNextPage && 
            <Waypoint
              onEnter={()=>{
                fetchMore({
                  variables: {
                    after: data.mainQuery.pageInfo.endCursor
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                      mainQuery: {
                        __typename: previousResult.mainQuery.__typename,
                        edges: [...previousResult.mainQuery.edges, ...fetchMoreResult.mainQuery.edges],
                        pageInfo: fetchMoreResult.mainQuery.pageInfo
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
