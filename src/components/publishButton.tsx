import React from "react";
import { Button, Icon } from "semantic-ui-react";
import gql from "graphql-tag";
import { graphql, ChildMutateProps, MutationFn } from "react-apollo";

export const PublishEntryMutation = gql`
  mutation($id: ID!, $entry: EntryInput!) {
    updateEntry(id: $id, input: $entry) {
      id
      published
    }
  }
`;

interface PublishEntryMutationResult {
  id: number;
  published: boolean;
}

interface PublishButtonProps {
  entryId: number;
  published: boolean;
}

interface PublishButtonChildProps {
  entryId: number;
  published: boolean;
  setPublished: MutationFn;
}

type Props = ChildMutateProps<
  PublishButtonChildProps,
  PublishEntryMutationResult,
  {}
>;

export const PublishButton: React.SFC<Props> = ({
  entryId,
  published,
  setPublished
}) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setPublished({
      variables: { id: entryId, entry: { published: !published } }
    });
  };

  if (published) {
    return (
      <Button
        floated="left"
        icon="microphone"
        content="Publish"
        onClick={onClick}
      />
    );
  } else {
    return (
      <Button floated="left" icon="remove" content="Remove" onClick={onClick} />
    );
  }
};

graphql;

export default graphql<
  PublishButtonProps,
  PublishEntryMutationResult,
  {},
  Props
>(PublishEntryMutation, { name: "setPublished" })(PublishButton);
