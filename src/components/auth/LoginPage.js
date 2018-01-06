import React, { Component } from 'react';

import LoginForm from './LoginForm';
import NavComponent from '../nav/NavComponent';
import LoginPageLayout from './LoginPageLayout';

export default class LoginPage extends Component {
  static defaultProps = {
    login: () => {}
  };

  render() {
    return (
      <div className="LoginPage">
        <NavComponent />
        <LoginForm onSubmit={this.props.login} />
      </div>
    );
  }
}
