import React from "react";
import { graphql, ChildDataProps } from "react-apollo";
import gql from "graphql-tag";

import Home from "../layouts/home";

const HomeQuery = gql`
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

interface Contact {
  name: string;
}

interface Call {
  to: Contact;
  from: Contact;
  recordingUrl: string;
}

interface Entry {
  id: number;
  title: string;
  summary: string;
  published: boolean;
  call: Call;
}

interface Feed {
  entries: Entry[];
}

interface User {
  name: string;
  feed: Feed;
}

interface HomeQueryResult {
  user: User;
}

type Props = ChildDataProps<{}, HomeQueryResult, {}>;

export const HomeContainer: React.SFC<Props> = ({
  data: { loading, error, user }
}) => {
  if (loading) return <div>"Loading..."</div>;
  if (error) return <div>"Error!"</div>;
  return <Home {...user} />;
};

export default graphql<{}, HomeQueryResult, {}, Props>(HomeQuery)(
  HomeContainer
);
