import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Visibility
} from 'semantic-ui-react';
import NavComponent from '../nav/NavComponent';
export default class LoginForm extends Component {
  static defaultProps = {
    onSubmit: () => {},
    onChange: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      invalidCredentials: false,
      email: '',
      password: ''
    };
  }

  _handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  _handleSubmit = event => {
    console.log(this.state, 'this is the state');
    const { email, password } = this.state;
    event.preventDefault();
    this.props.onSubmit({
      email: email.trim(),
      password: password.trim()
    });
  };

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="violet" textAlign="center">
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjq8aj0TdXsrkcRtmf9OUTeHldh86-rRSmzlrYZQ-kzUuXtip2mA" />{' '}
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this._handleSubmit}>
              <Segment stacked>
                <Form.Input
                  required
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={this._handleChange}
                  value={this.state.email.value}
                  name="email"
                />
                <Form.Input
                  required
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={this._handleChange}
                  value={this.state.password.value}
                  name="password"
                />

                <Form.Button color="yellow" fluid size="large">
                  Login
                </Form.Button>
              </Segment>
            </Form>
            {/* <Message>
              New to us? <a href="#">Sign Up</a>
            </Message> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
//when insert or update with sql serialize json object
