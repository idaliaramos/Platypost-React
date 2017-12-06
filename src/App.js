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
import LoginPageContainer from './redux/containers/LoginPageContainer.js';
import RegisterPageContainer from './redux/containers/RegisterPageContainer.js';
import ReceiverAddressForm from './components/mailForms/ReceiverAddressForm';
import SenderAddressForm from './components/mailForms/SenderAddressForm';
// import RegisterPageContainer from './redux/containers/RegisterPageContainer';
// import ErrorPage from './components/ErrorPage';
import SendPage from './components/testComponents/SendPage';
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
              <Route exact path="/login" component={LoginPageContainer} />
              <Route exact path="/register" component={RegisterPageContainer} />
              <Route exact path="/send" component={SendPage} />
              <Route exact path="/" component={HomeComponent} />
              {/* <Route exact path="/sendto" component={ReceiverAddressForm} />
              <Route exact path="/from" component={SenderAddressForm} /> */}
              {/* <Route
              exact
              path="/history/:userId"
              component={HistoryPageContainer}
            /> */}

              {/* <Route
                 render={() => <ErrorPage errorCode="ERROR_NOT_FOUND" />}
                /> */}
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}
