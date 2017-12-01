// import React, { Component } from 'react';
// import logo from './logo.svg';
// import Checkout from './Checkout';
// import ReactS3Uploader from './ReactS3Uploader';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           <Checkout
//             name={'The Road to learn React'}
//             description={'Only the Book'}
//             amount={1}
//           />
//           <ReactS3Uploader />
//         </p>
//       </div>
//     );
//   }
// }
//////////////////////////////////////////
// export default App;
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomeComponent from './components/Home/HomeComponent';
import MailPageContainer from './redux/containers/MailPageContainer';
import LoginForm from './components/auth/LoginForm.js';
import RegisterForm from './components/auth/RegisterForm.js';
// import RegisterPageContainer from './redux/containers/RegisterPageContainer';
// import ErrorPage from './components/ErrorPage';
import setupStore from './redux/setupStore';

const store = setupStore();

export default class App extends Component {
  render() {
    return (
      // <MuiThemeProvider>
      <div className="App">
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/register" component={RegisterForm} />
              <Route exact path="/mail" component={MailPageContainer} />
              <Route exact path="/" component={HomeComponent} />
              {/* <Route
              exact
              path="/history/:userId"
              component={HistoryPageContainer}
            /> */}
              <Route exact path="/mail" component={MailPageContainer} />
              {/* <Route
                 render={() => <ErrorPage errorCode="ERROR_NOT_FOUND" />}
                /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
      // </MuiThemeProvider>
    );
  }
}
//////////////////////////////////////////
///////HOME PAGE////////////////////////////
// import React, { Component } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import {
//   Button,
//   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Segment,
//   Visibility
// } from 'semantic-ui-react';
//
// const FixedMenu = () =>
//   <Menu fixed="top" size="large">
//     <Container>
//       <Menu.Item as="a" active>
//         Home
//       </Menu.Item>
//       <Menu.Item as="a">Work</Menu.Item>
//       <Menu.Item as="a">Company</Menu.Item>
//       <Menu.Item as="a">Careers</Menu.Item>
//       <Menu.Menu position="right">
//         <Menu.Item className="item">
//           <Button as="a">Log in</Button>
//         </Menu.Item>
//         <Menu.Item>
//           <Button as="a" primary>
//             Sign Up
//           </Button>
//         </Menu.Item>
//       </Menu.Menu>
//     </Container>
//   </Menu>;
//
// export default class HomepageLayout extends Component {
//   state = {};
//
//   hideFixedMenu = () => this.setState({ visible: false });
//   showFixedMenu = () => this.setState({ visible: true });
//
//   render() {
//     const { visible } = this.state;
//
//     return (
//       <div>
//         {visible ? <FixedMenu /> : null}
//
//         <Visibility
//           onBottomPassed={this.showFixedMenu}
//           onBottomVisible={this.hideFixedMenu}
//           once={false}>
//           <Segment
//             // inverted
//             textAlign="center"
//             style={{ minHeight: 700, padding: '1em 0em' }}
//             vertical>
//             <Container color={'green'}>
//               <Menu pointing secondary size="large">
//                 <Menu.Item color={'yellow'} to="/home" active>
//                   Home
//                 </Menu.Item>
//                 {/* <Menu.Item color="yellow" as={Link} to="/pricing">
//
//                   Pricing
//                 </Menu.Item> */}
//                 {/* <NavLink className="add-to-cart" exact to="/cart" /> */}
//                 {/* <Menu.Item as={Link} to="/about">
//                   About
//                 </Menu.Item> */}
//                 {/* <Menu.Item as="a">Careers</Menu.Item> */}
//                 <Menu.Item position="right">
//                   <Button as="a">Log in</Button>
//                   <Button as="a" color="yellow" style={{ marginLeft: '0.5em' }}>
//                     Sign Up
//                   </Button>
//                 </Menu.Item>
//               </Menu>
//             </Container>
//
//             <Container text>
//               <Header
//                 as="h1"
//                 content="Paper Mail without leaving your seat"
//                 // inverted
//                 style={{
//                   fontSize: '4em',
//                   fontWeight: 'normal',
//                   marginBottom: 0,
//                   marginTop: '3em'
//                 }}
//               />
//               <Header
//                 as="h2"
//                 content="Mail what you want, whenever you want"
//                 // inverted
//                 style={{ fontSize: '1.7em', fontWeight: 'normal' }}
//               />
//               <Button color="purple" size="huge">
//                 Upload a PDF
//                 <Icon name="right arrow" />
//               </Button>
//             </Container>
//           </Segment>
//         </Visibility>
//         <Segment style={{ padding: '0em' }} vertical>
//           <Grid celled="internally" columns="equal" stackable>
//             <Grid.Row textAlign="center">
//               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//                 <Header as="h3" style={{ fontSize: '2em' }}>
//                   Receive Mail Notifications
//                 </Header>
//                 <p style={{ fontSize: '1.33em' }}>
//                   Get updates of your mail, know when it has been delivered.
//                 </p>
//               </Grid.Column>
//               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
//                 <Header as="h3" style={{ fontSize: '2em' }}>
//                   No more buying 50 envelopes to send 1 letter.
//                 </Header>
//
//                 <p style={{ fontSize: '1.33em' }}>
//                   We handle the envelope, postage, delivery, all included in the
//                   price. No hidden fees.
//                 </p>
//               </Grid.Column>
//             </Grid.Row>
//           </Grid>
//         </Segment>
//         <Segment style={{ padding: '8em 0em' }} vertical>
//           <Container text>
//             <Header as="h3" style={{ fontSize: '2em' }}>
//               Time is money.
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               Stop wasting your time to send a measly letter. Its a pain to have
//               to buy envelopes, go to the post office, stand in a line. We value
//               your time, just upload a pdf and you are good to go.
//             </p>
//             <Button as="a" size="large">
//               Read More
//             </Button>
//             <Divider
//               as="h4"
//               className="header"
//               horizontal
//               style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
//               <a href="#">Case Studies</a>
//             </Divider>
//             <Header as="h3" style={{ fontSize: '2em' }}>
//               Keep a
//             </Header>
//             <p style={{ fontSize: '1.33em' }}>
//               Yes I know you probably disregarded the earlier boasts as
//               non-sequitur filler content, but it's really true. It took years
//               of gene splicing and combinatory DNA research, but our bananas can
//               really dance.
//             </p>
//             <Button as="a" size="large">
//               I'm Still Quite Interested
//             </Button>
//           </Container>
//         </Segment>
//         <Segment
//           // inverted
//           vertical
//           style={{ padding: '5em 0em' }}>
//           <Container>
//             <Grid
//               divided
//               // inverted
//               stackable>
//               <Grid.Row>
//                 <Grid.Column width={3}>
//                   <Header
//                     // inverted
//                     as="h4"
//                     content="About"
//                   />
//                   <List link>
//                     // inverted
//                     <List.Item as="a">Sitemap</List.Item>
//                     <List.Item as="a">Contact Us</List.Item>
//                     <List.Item as="a">Religious Ceremonies</List.Item>
//                     <List.Item as="a">Gazebo Plans</List.Item>
//                   </List>
//                 </Grid.Column>
//                 <Grid.Column width={3}>
//                   <Header
//                     // inverted
//                     as="h4"
//                     content="Services"
//                   />
//                   <List link>
//                     <List.Item as="a">Banana Pre-Order</List.Item>
//                     <List.Item as="a">DNA FAQ</List.Item>
//                     <List.Item as="a">How To Access</List.Item>
//                     <List.Item as="a">Favorite X-Men</List.Item>
//                   </List>
//                 </Grid.Column>
//                 <Grid.Column width={7}>
//                   <Header as="h4">Footer Header</Header>
//                   <p>
//                     Extra space for a call to action inside the footer that
//                     could help re-engage users.
//                   </p>
//                 </Grid.Column>
//               </Grid.Row>
//             </Grid>
//           </Container>
//         </Segment>
//       </div>
//     );
//   }
// }
