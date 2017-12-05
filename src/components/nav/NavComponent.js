import React, { Component } from 'react';
import { Menu, Segment, Image, Container } from 'semantic-ui-react';

export default class NavComponent extends Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu size="large" pointing color="purple" secondary>
          <Container>
            {/* <Image
              size="large"
              src="narmail.png"
              style={{ marginRight: '1.5em' }}
            /> */}

            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              <Image size="large" src="src/components/nav/narmail.png" />
            </Menu.Item>
            {/*
          <Menu.Item
            name="friends"
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          /> */}
            <Menu.Menu position="right">
              <Menu.Item
                name="history"
                active={activeItem === 'history'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="logout"
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}
