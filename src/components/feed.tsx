import React from "react";
import FeedEntry from "./feedEntry";

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

interface FeedEntries {
  entries: Entry[];
}

interface Props {
  feed: FeedEntries;
}

export const Feed: React.SFC<Props> = ({ feed }) => {
  return (
    <div>
      {feed.entries.map(entry => (
        <FeedEntry {...entry} />
      ))}
    </div>
  );
};

export default Feed;
