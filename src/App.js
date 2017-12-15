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
import HistoryPage from './components/table/HistoryPage';
import HistoryPageContainer from './redux/containers/HistoryPageContainer';
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
              <Route exact path="/history" component={HistoryPageContainer} />

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
