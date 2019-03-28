import React from "react";
import { mount } from "enzyme";

import PublishButton, { PublishEntryMutation } from "./publishButton";
import { MockedProvider } from "react-apollo/test-utils";
import { Button } from "semantic-ui-react";

describe("PublishButton", () => {
  it("Displays 'Remove' when entry is published", () => {
    const mocks = [
      {
        request: {
          query: PublishEntryMutation,
          variables: {
            id: 1,
            entry: {
              published: true
            }
          }
        },
        result: {
          data: {
            updateEntry: {
              id: 1,
              published: true
            }
          }
        }
      }
    ];
    const button = mount(
      <MockedProvider mocks={mocks}>
        <PublishButton entryId={1} published={false} />
      </MockedProvider>
    );
    button.find(Button).simulate("click");
    expect(button.find(PublishButton).text()).toBe("Remove");
  });

  it("Displays 'Publish' when entry is unpublished", () => {
    const mocks = [
      {
        request: {
          query: PublishEntryMutation,
          variables: {
            id: 1,
            entry: {
              published: false
            }
          }
        },
        result: {
          data: {
            updateEntry: {
              id: 1,
              published: false
            }
          }
        }
      }
    ];
    const button = mount(
      <MockedProvider mocks={mocks}>
        <PublishButton entryId={1} published={true} />
      </MockedProvider>
    );
    button.find(Button).simulate("click");
    expect(button.find(PublishButton).text()).toBe("Publish");
  });
});
