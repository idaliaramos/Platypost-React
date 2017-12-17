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
import responseModal from '../modals/responseModal';
import decode from 'jwt-decode';

export default class SendPage extends React.Component {
  static defaultProps = {
    changetoStep3: () => {},
    changetoStep2: () => {},
    changetoStep1: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      loadingState: false,
      modalOpen: true
    };
  }

  _s3UploadComplete = data => {
    this.setState({
      S3UploadUrl: data.url,
      S3UploadPublicPath: data.publicPath,
      step: 1,
      loadingState: false
    });
  };
  _successResponse = () => {
    console.log('ia m here');
    this.setState({
      modalOpen: true
    });
  };
  _setLoading = () => {
    this.setState({
      loadingState: true
    });
  };

  render() {
    <responseModal
      onSuccess={this._successResponse}
      modalOpen={this.state.modalOpen}
      {...this.props}
    />;
    switch (this.state.step) {
      case 0:
        return (
          <div>
            <NavComponent {...this.props} />
            <UploadComponent
              onNext={this._moveToStep1}
              onPrevious={this._moveToHome}
              onComplete={this._s3UploadComplete}
              loading={this._setLoading}
              loadingState={this.state.loadingState}
              {...this.props}
            />
          </div>
        );
      case 1:
        return (
          <div>
            <NavComponent {...this.props} />
            <ReceiverAddressForm
              onNext={this._moveToStep2}
              onPrevious={this._moveToStart}
              onChange={this._handleChangeReceiverAddressForm}
              receiverInfo={this.state.receiverInfo}
              S3UploadPublicPath={this.state.S3UploadPublicPath}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <NavComponent {...this.props} />
            <SenderAddressForm
              onNext={this._moveToStep3}
              onPrevious={this._moveToStep1}
              onChange={this._handleChangeSenderAddressForm}
              senderInfo={this.state.senderInfo}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <NavComponent {...this.props} />
            <MailPage
              {...this.props}
              // onNext={this._done}
              receiverInfo={this.state.receiverInfo}
              senderInfo={this.state.senderInfo}
              S3UploadUrl={this.state.S3UploadUrl}
              S3UploadPublicPath={this.state.S3UploadPublicPath}
              onPrevious={this._moveToStep2}
              userId={this.state.userId}
            />
          </div>
        );
      case 0:
      default:
        return (
          <div>
            <NavComponent {...this.props} />
            {/* <UploadComponent
              onNext={this._moveToStep1}
              onPrevious={this._moveToHome}
              url={this.state.url}
              onComplete={this._s3UploadComplete}
              loading={this._setLoading}
              {...this.props}
            /> */}
            <responseModal
              onSuccess={this._successResponse}
              modalOpen={this.state.modalOpen}
              {...this.props}
            />
          </div>
        );
    }
  }
  _moveToHome = () => {
    this.props.history.push('/');
  };
  _moveToStart = () => {
    this.setState({
      step: 0
    });
  };
  _moveToStep1 = () => {
    this.setState({
      step: 1
    });
    //why after i set the loading state this broke?
    // var userId = decode(localStorage.token).sub;
    // this.setState({
    //   userId: userId
    // });
  };

  _handleChangeReceiverAddressForm = changedReceiverInfo => {
    console.log(changedReceiverInfo, 'this s the info');
    // console.log(...currenState.receiverInfo, 'current');
    console.log(this.state, 'this is the state in the rec');
    this.setState(currenState => ({
      ...currenState,
      receiverInfo: {
        ...currenState.receiverInfo,
        ...changedReceiverInfo
      }
    }));
    console.log(changedReceiverInfo, 'this s the info2');
    // console.log(...currenState.receiverInfo, 'current2');
  };
  _handleChangeSenderAddressForm = changedSenderInfo => {
    this.setState(currenState => ({
      ...currenState,
      senderInfo: {
        ...currenState.senderInfo,
        ...changedSenderInfo
      }
    }));
    var userId = decode(localStorage.token).sub;
    this.setState({
      userId: userId
    });
  };

  _moveToStep2 = () => {
    this.setState({ step: 2 });
    console.log(this.state, 'state in step 2');
  };

  _moveToStep3 = () => {
    this.setState({
      step: 3
    });
    console.log(this.state, 'state in step 3');
  };

  // _done = () => {
  //   console.log(this.state, 'final state');
  //   console.log('DONE!!!!');
  // };
}
//should i make differenct function for onPrevious or fine to use changetoStep
