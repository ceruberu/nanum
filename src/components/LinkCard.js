import React from 'react';
import { Query } from 'react-apollo';
import Waypoint from 'react-waypoint';
import { feedQuery } from '../graphql';
import Card from './Card';

const CardList = () => (
  <Query query={feedQuery} variables={{limit: 20}}> 
    {({ loading, error, data, fetchMore }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div className="card-container">
          {data.feedQuery.edges.map(edge => <Card key={edge.node._id} item={edge.node} />)}
          {
            data.feedQuery.pageInfo.hasNextPage && 
            <Waypoint
              onEnter={()=>{
                fetchMore({
                  variables: {
                    after: data.feedQuery.pageInfo.endCursor
                  },
                  updateQuery: (previousResult, { fetchMoreResult }) => {
                    return {
                      feedQuery: {
                        __typename: previousResult.feedQuery.__typename,
                        edges: [...previousResult.feedQuery.edges, ...fetchMoreResult.feedQuery.edges],
                        pageInfo: fetchMoreResult.feedQuery.pageInfo
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
