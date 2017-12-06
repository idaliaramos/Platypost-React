import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import SenderAddressForm from '../mailForms/SenderAddressForm';
import ReceiverAddressForm from '../mailForms/ReceiverAddressForm';
import MailPage from '../mail/MailPage';
import HomeComponent from '../Home/HomeComponent';
import UploadComponent from '../upload/UploadComponent';
import NavComponent from '../nav/NavComponent';

export default class SendPage extends React.Component {
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
      case 0:
        return (
          <UploadComponent
            onNext={this._moveToStep1}
            onPrevious={this._moveToHome}
          />
        );
      case 1:
        return (
          <ReceiverAddressForm
            onNext={this._moveToStep2}
            onPrevious={this._moveToStart}
            onChange={this._handleChangeReceiverAddressForm}
            receiverInfo={this.state.receiverInfo}
          />
        );
      case 2:
        return (
          <SenderAddressForm
            onNext={this._moveToStep3}
            onPrevious={this._moveToStep1}
            onChange={this._handleChangeSenderAddressForm}
            senderInfo={this.state.senderInfo}
          />
        );
      case 3:
        return (
          <MailPage
            onNext={this._done}
            receiverInfo={this.state.receiverInfo}
            senderInfo={this.state.senderInfo}
            url={this.state.url}
          />
        );
      case 0:
      default:
        return <UploadComponent onNext={this._moveToStep1} />;
    }
  }
  _moveToHome = () => {
    this.props.history.push('/');
  };
  _moveToStart = url => {
    this.setState({
      step: 0
    });
    console.log(this.state, 'state in send step 0');
  };
  _moveToStep1 = url => {
    this.setState({
      step: 1,
      url
    });
    console.log(this.state, 'state in send step1');
  };

  _handleChangeReceiverAddressForm = changedReceiverInfo => {
    this.setState(currenState => ({
      ...currenState,
      receiverInfo: {
        ...currenState.receiverInfo,
        ...changedReceiverInfo
      }
    }));
  };
  _handleChangeSenderAddressForm = changedSenderInfo => {
    this.setState(currenState => ({
      ...currenState,
      senderInfo: {
        ...currenState.senderInfo,
        ...changedSenderInfo
      }
    }));
  };

  _moveToStep2 = () => {
    this.setState({ step: 2 });
    console.log(this.state, 'state in step 2');
  };

  _moveToStep3 = () => {
    this.setState({
      step: 3
    });
    console.log(this.state, 'state in send page step 3');
  };

  _done = () => {
    console.log(this.state, 'final state');
    console.log('DONE!!!!');
  };
}
//should i make differenct function for onPrevious or fine to use changetoStep
