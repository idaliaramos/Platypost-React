// import React, { Component } from 'react';
// import { Form, Segment, Divider } from 'semantic-ui-react';
//
// export default class LoginForm extends Component {
//   static defaultProps = {
//     onSubmit: () => {}
//   };
//
//   state = {
//     invalidCredentials: false
//   };
//
//   render() {
//     return (
//       <Segment stacked inverted>
//         <Form.Input
//           fluid
//           icon="user"
//           iconPosition="left"
//           placeholder="E-mail address"
//         />
//         <Divider hidden />
//
//         <Form.Input
//           fluid
//           icon="lock"
//           iconPosition="left"
//           placeholder="Password"
//           type="password"
//         />
//         <Divider hidden />
//         <Form.Input
//           fluid
//           icon="lock"
//           iconPosition="left"
//           placeholder="Double Check Password"
//           type="password"
//         />
//         <Divider hidden />
//         <Form.Button color="yellow" fluid size="large">
//           Login
//         </Form.Button>
//       </Segment>
//     );
//   }
//
//   _handleSubmit = event => {
//     event.preventDefault();
//     const { username, password } = event.target;
//     this.props
//       .onSubmit({
//         username: (username.value || '').trim(),
//         password: password.value || ''
//       })
//       .catch(error => {
//         console.log(error.message);
//         if (
//           error.message.startsWith('AuthenticationService.ERROR_UNEXPECTED')
//         ) {
//           this.setState({
//             invalidCredentials: true
//           });
//         }
//       });
//   };
// }
import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from 'semantic-ui-react';

export default class LoginForm extends Component {
  static defaultProps = {
    onSubmit: () => {}
  };

  state = {
    invalidCredentials: false
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
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />

                <Form.Button color="yellow" fluid size="large">
                  Login
                </Form.Button>
              </Segment>
            </Form>
            <Message>
              New to us? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
// export default LoginForm;

// import React, { Component } from 'react';
// import Cropper from 'react-cropper';
// import 'cropperjs/dist/cropper.css';
// export default class LoginForm extends Component {
//   _crop() {
//     // image in dataUrl
//     console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
//   }
//
//   render() {
//     return (
//       <Cropper
//         ref="cropper"
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3d6mxO45vIVLhGGzt9TwWnGTCFvr7yNDFD6NFGR0R6tzuAGJ_g"
//         style={{ height: 576, width: 800 }}
//         // Cropper.js options
//         aspectRatio={6.25 / 4.5}
//         guides={false}
//         crop={this._crop.bind(this)}
//       />
//     );
//   }
// }
