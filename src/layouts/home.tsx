import React from "react";
import { Container, Header, Divider, Grid } from "semantic-ui-react";

import Topbar from "../components/topbar";
import Feed from "../components/feed";
import CallButton from "../components/callButton";

interface Contact {
  name: string;
}

interface Call {
  to: Contact;
  from: Contact;
  recordingUrl: string;
}

interface FeedEntry {
  id: number;
  title: string;
  summary: string;
  published: boolean;
  call: Call;
}

interface FeedEntries {
  entries: FeedEntry[];
}

interface Props {
  name: string;
  feed: FeedEntries;
}

export class HomeLayout extends React.Component<Props, {}> {
  static defaultProps = {
    name: "User",
    feed: []
  };

  render() {
    return (
      <div>
        <Topbar />
        <Container style={{ marginTop: "7em" }}>
          <Header as="h1">Welcome, {this.props.name}!</Header>
          <Divider />
          <Grid stackable columns="equal">
            <Grid.Column width={12}>
              <Feed feed={this.props.feed} />
            </Grid.Column>
            <Grid.Column width={4}>
              <CallButton />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HomeLayout;
