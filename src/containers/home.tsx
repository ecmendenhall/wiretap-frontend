import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Home from "../layouts/home";

const GET_HOME = gql`
  {
    user {
      name
      feed {
        entries {
          id
          title
          summary
          published
          call {
            to {
              name
            }
            from {
              name
            }
            recordingUrl
          }
        }
      }
    }
  }
`;

export class HomeContainer extends React.Component<{}, {}> {
  render() {
    return (
      <Query query={GET_HOME}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return "Error!";
          const { user } = data;
          return <Home {...user} />;
        }}
      </Query>
    );
  }
}

export default HomeContainer;
