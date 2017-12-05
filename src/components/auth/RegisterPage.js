import React, { Component } from 'react';

import RegisterForm from './RegisterForm';
import NavComponent from '../nav/NavComponent';
import LoginPageLayout from './LoginPageLayout';

export default class RegisterPage extends Component {
  static defaultProps = {
    login: () => {}
  };

  render() {
    return (
      <div className="RegisterPage">
        <LoginPageLayout>
          <NavComponent />
          <RegisterForm onSubmit={this.props.login} />
        </LoginPageLayout>
      </div>
    );
  }
}
