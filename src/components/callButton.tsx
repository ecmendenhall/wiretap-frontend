import React from "react";
import { Button } from "semantic-ui-react";
import { graphql, ChildMutateProps, MutationFn } from "react-apollo";
import gql from "graphql-tag";

const StartCallMutation = gql`
  mutation {
    startCall {
      id
      to {
        name
      }
    }
  }
`;

interface Contact {
  name: string;
}

interface StartCallMutationResult {
  id: number;
  to: Contact;
}

interface StartCallMutationProps {
  startCall: MutationFn;
}

type Props = ChildMutateProps<
  StartCallMutationProps,
  StartCallMutationResult,
  {}
>;

export const CallButton: React.SFC<Props> = ({ startCall }) => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    startCall();
  };

  return (
    <Button
      labelPosition="left"
      size="huge"
      icon="phone"
      content="Start a call"
      onClick={onClick}
    />
  );
};

export default graphql<{}, StartCallMutationResult, {}, Props>(
  StartCallMutation,
  { name: "startCall" }
)(CallButton);
