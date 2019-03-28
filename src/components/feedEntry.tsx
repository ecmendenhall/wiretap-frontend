import React from "react";
import { Card, Button } from "semantic-ui-react";
import PublishButton from "./publishButton";

interface Contact {
  name: string;
}

interface Call {
  to: Contact;
  from: Contact;
  recordingUrl: string;
}

interface Props {
  id: number;
  title: string;
  summary: string;
  published: boolean;
  call: Call;
}

const getTitle = ({ title, call }: Props) => {
  return title || `${call.to.name}`;
};

const getDescription = ({ summary, call }: Props) => {
  return summary || `${call.from.name} calls ${call.to.name}`;
};

const FeedEntry: React.SFC<Props> = props => {
  const { id, call, published } = props;
  return (
    <Card fluid key={id}>
      <Card.Content header={getTitle(props)} />
      <Card.Content description={getDescription(props)} />
      <Card.Content extra>
        <PublishButton entryId={id} published={published} />
        <Button
          as="a"
          icon="play"
          content="Play"
          href={call.recordingUrl}
          target="_blank"
          floated="right"
        />
      </Card.Content>
    </Card>
  );
};

export default FeedEntry;
