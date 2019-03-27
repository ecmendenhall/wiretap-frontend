import React from "react";
import { Button, Icon } from "semantic-ui-react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

interface Props {
  entryId: number;
}

const PUBLISH_ENTRY = gql`
  mutation($id: ID!, $entry: EntryInput!) {
    updateEntry(id: $id, input: $entry) {
      id
      published
    }
  }
`;

export class UnPublishButton extends React.Component<Props, {}> {
  render() {
    return (
      <Mutation mutation={PUBLISH_ENTRY}>
        {(publish, { data }) => {
          const onClick = (
            e: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ) => {
            e.preventDefault();
            publish({
              variables: { id: this.props.entryId, entry: { published: false } }
            });
          };
          return (
            <Button
              floated="left"
              icon="trash"
              content="Delete"
              onClick={onClick}
            />
          );
        }}
      </Mutation>
    );
  }
}

export default UnPublishButton;
