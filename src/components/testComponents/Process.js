import React from 'react';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import SenderAddressPage from '../mailForms/SenderAddressPage';
import ReceiverAddressPage from '../mailForms/ReceiverAddressPage';
import MailPage from '../mail/MailPage';
import HomeComponent from '../Home/HomeComponent';
export default class Process extends React.Component {
  static defaultProps = {
    changetoStep3: () => {},
    changetoStep1: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  render() {
    switch (this.state.step) {
      case 1:
        return <ReceiverAddressPage onNext={this._moveToStep2} />;
      case 2:
        return <SenderAddressPage onNext={this._done} />;
      case 3:
        return <MailPage onNext={this._moveToStep2} />;
      case 1:
      default:
        return <HomeComponent onNext={this.movetoStep1} />;
    }
  }

  _moveToStep2 = receiverInfo => {
    this.setState({
      step: 2,
      receiverInfo
    });
  };

  _moveToStep3 = () => {
    this.setState({
      step: 3
    });
  };

  _done = () => {
    console.log('DONE!!!!');
  };
}
