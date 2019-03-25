import React from "react";
import { Menu, Container } from "semantic-ui-react";

export class Topbar extends React.Component<{}, {}> {
  render() {
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            Wiretap.live
          </Menu.Item>
          <Menu.Item as="a" position="right">
            Sign Out
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Topbar;
