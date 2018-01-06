import React from 'react';
import SenderAddressForm from '../mailForms/SenderAddressForm';
import ReceiverAddressForm from '../mailForms/ReceiverAddressForm';
import MailPage from '../mail/MailPage';
import HomeComponent from '../Home/HomeComponent';
import UploadComponent from '../upload/UploadComponent';
import NavComponent from '../nav/NavComponent';
import ResponseModal from '../modals/ResponseModal';
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
      modalOpen: false,
      successModal: false
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
  _successResponse = boolean => {
    if (boolean) {
      this.setState({ successModal: true });
    }
    this.setState({
      modalOpen: true
    });
  };

  _closeModal = () => {
    this.setState({
      modalOpen: false
    });
  };
  _setLoading = () => {
    this.setState({
      loadingState: true
    });
  };

  render() {
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
              onChange={this._handleChangeMessageAndReceiverInfo}
              receiverInfo={this.state.receiverInfo}
              messageInfo={this.state.messageInfo}
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
              messageInfo={this.state.messageInfo}
              senderInfo={this.state.senderInfo}
              S3UploadUrl={this.state.S3UploadUrl}
              S3UploadPublicPath={this.state.S3UploadPublicPath}
              onPrevious={this._moveToStep2}
              userId={this.state.userId}
              toggleResponseModal={this._successResponse}
            />
            <ResponseModal
              S3UploadPublicPath={this.state.S3UploadPublicPath}
              modalOpen={this.state.modalOpen}
              closeModal={this._closeModal}
              successModal={this.state.successModal}
              // onSuccess={this._successResponse}
              // {...this.props}
            />
          </div>
        );
      case 0:
      default:
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
  _handleChangeMessageAndReceiverInfo = data => {
    this._handleChangeReceiverAddressForm();
    this._handleChangeMessageInfo();
  };

  _handleChangeReceiverAddressForm = changedReceiverInfo => {
    console.log('handleChangeReceiverAddressForm :)');
    this.setState(currenState => ({
      ...currenState,
      receiverInfo: {
        ...currenState.receiverInfo,
        ...changedReceiverInfo
      }
    }));
  };

  _handleChangeMessageInfo = changedMessageInfo => {
    this.setState(currenState => ({
      ...currenState,
      messageInfo: {
        ...currenState.messageInfo,
        ...changedMessageInfo
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
  };

  // _done = () => {
  //   console.log(this.state, 'final state');
  //   console.log('DONE!!!!');
  // };
}
//should i make differenct function for onPrevious or fine to use changetoStep
