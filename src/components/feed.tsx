import React from "react";
import { Card, Button, CommentActionProps } from "semantic-ui-react";
import { ENETUNREACH } from "constants";

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
  feed: FeedEntries;
}

export class Feed extends React.Component<Props, {}> {
  title(entry: FeedEntry) {
    return entry.title || `${entry.call.to.name}`;
  }

  description(entry: FeedEntry) {
    return (
      entry.summary || `${entry.call.from.name} calls ${entry.call.to.name}`
    );
  }

  publishButton(entry: FeedEntry) {
    return entry.published ? (
      <Button floated="left" icon="trash" content="Delete" />
    ) : (
      <Button floated="left" icon="microphone" content="Publish" />
    );
  }

  entries() {
    return this.props.feed.entries.map(entry => {
      return (
        <Card fluid key={entry.id}>
          <Card.Content header={this.title(entry)} />
          <Card.Content description={this.description(entry)} />
          <Card.Content extra>
            {this.publishButton(entry)}
            <Button
              as="a"
              icon="play"
              content="Play"
              href={entry.call.recordingUrl}
              target="_blank"
              floated="right"
            />
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return <div>{this.entries()}</div>;
  }
}

export default Feed;