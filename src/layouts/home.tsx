import React from "react";
import {
  Container,
  Header,
  Divider,
  Button,
  Grid,
  Icon
} from "semantic-ui-react";

import Topbar from "../components/topbar";
import Feed from "../components/feed";

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
              <Button icon labelPosition="left" size="huge">
                <Icon name="phone" />
                Start a call
              </Button>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default HomeLayout;
