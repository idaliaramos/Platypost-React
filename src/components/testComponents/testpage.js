import React from 'react';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
export default class TestPage extends React.Component {
  static defaultProps = {
    changetoStep3: () => {},
    changetoStep1: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  render() {
    switch (this.state.step) {
      case 2:
        return <Component2 onNext={this._moveToStep3} />;
      case 3:
        return <Component3 onNext={this._done} />;
      case 1:
      default:
        return <Component1 onNext={this._moveToStep2} />;
    }

    // <div />;
    // if (this.state.step)
    // <div>
    //   <Container style={style}>
    //     {this.state.step === 1
    //       ? this._renderStep1()
    //       : this._renderStep2()}
    //   </Container>
    // </div>
  }

  _moveToStep2 = data => {
    this.setState({
      step: 2
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

  // _changetoStep1 = (...args) => {
  //     // this.props.changetoStep1(...args);
  //     this.state = {
  //       step: 1
  //     };
  //   };
  // _changetoStep2 = (...args) => {
  //   this.props.changetoStep2(...args);
  //   this.state = {
  //     step: 2
  //   };
  // };
  // _changetoStep3 = (...args) => {
  //   this.props.changetoStep3(...args);
  //   this.state = {
  //     step: 1
  //   };
  // };

  // _renderStep1() {
  //   return (
  //     <Component1
  //        changetoStep2={this.changetoStep2}
  //     />
  //   );
  // }
  // _handleClickSaveButton = event => {
  //   //console.log(this.refs, 'this is the refs <<<<<<<<<');
  //   this.props.onUpdateAdventureCard(this.props.adventureCard.id, {
  //     /
  //   });
  //   this.setState({
  //     editMode: false
  //   });
  // };
  //
  // _renderStep2() {
  //   return (
  //     <Component2 changetoStep3={this._changetoStep3}
  //     />
  //   );
  // }
  // _renderStep3() {
  //   return (
  //     <Component3
  //        changetoStep1={this._changetoStep1}
  //     />
  //   );
  // }
}
