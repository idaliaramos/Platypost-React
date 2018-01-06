import React, { Component } from 'react';
import { Menu, Segment, Image, Container } from 'semantic-ui-react';

export default class NavComponent extends Component {
  constructor(props) {
    const activeItem = 'login';

    super(props);
    this.state = {
      activeItem: this.props.pageName
    };

    console.log(this.props, 'props');
    console.log(this.state, 'state in nav');
  }

  // state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleLogout = e => {
    localStorage.removeItem('token');
    console.log(localStorage, 'storage');
    console.log(this.props, 'props');
    this.props.history.push('/');
  };

  handleLogin = e => {};

  render() {
    if (localStorage.token) {
      return this._renderLoggedIn();
    }
    return this._renderLoggedOut();
  }

  _renderLoggedIn() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu size="large" pointing color="purple" secondary>
          <Container>
            <Menu.Item header name="PLATYPOST" />
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              href="/"
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Menu.Item
                name="history"
                href="/history"
                active={activeItem === 'history'}
              />
              <Menu.Item
                name="logout"
                active={activeItem === 'logout'}
                onClick={this.handleLogout}
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }

  _renderLoggedOut() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu size="large" pointing color="purple" secondary>
          <Container>
            <Menu.Item header name="PLATYPOST" />
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              href="/"
              onClick={this.handleItemClick}
            />

            <Menu.Menu position="right">
              <Menu.Item
                name="login"
                href="/login"
                active={activeItem === 'login'}
              />
              <Menu.Item
                name="register"
                href="/register"
                active={activeItem === 'register'}
                onClick={this.handleLogout}
              />
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    );
  }
}
