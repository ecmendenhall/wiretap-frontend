import React from "react";
import { shallow } from "enzyme";

import FeedEntry from "./feedEntry";
import PublishButton from "./publishButton";

describe("FeedEntry", () => {
  let props = {
    id: 1,
    title: "Title",
    summary: "Summary",
    published: true,
    call: {
      to: {
        name: "To Name"
      },
      from: {
        name: "From Name"
      },
      recordingUrl: "https://example.com/"
    }
  };

  it("Displays title when title is present", () => {
    const entry = shallow(<FeedEntry {...props} />);
    expect(entry.find({ header: "Title" })).toHaveLength(1);
  });

  it("Constructs a title from contact name when title is absent", () => {
    props.title = "";
    const entry = shallow(<FeedEntry {...props} />);
    expect(entry.find({ header: "To Name" })).toHaveLength(1);
  });

  it("Displays description when summary is present", () => {
    const entry = shallow(<FeedEntry {...props} />);
    expect(entry.find({ description: "Summary" })).toHaveLength(1);
  });

  it("Constructs a description from contact names when summary is absent", () => {
    props.summary = "";
    const entry = shallow(<FeedEntry {...props} />);
    expect(entry.find({ description: "From Name calls To Name" })).toHaveLength(
      1
    );
  });
});
