import React from 'react';

import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
export default class TestPage extends React.Component {
  static defaultProps = {
    changetoStep3: () => {},

  };

  constructor(props) {
    super(props);
    this.state = {
      step: 1
      mailInfo:{}
    };
  }

  render() {
    return (
      switch (step) {
        case 1:
          this._renderStep1()
          break;
        case 2:
          this._renderStep2()
            break;
        case 3:
          this._renderStep2()
          break;
        default:
          console.log('default');
      }

      // <div>
      //   <Container style={style}>
      //     {/* {this.state.step === 1
      //       ? this._renderStep1()
      //       : this._renderStep2()} */}
      //   </Container>
      // </div>

    );
  }

  changetoStep1 = (...args) => {
      this.props.changetoStep1(...args);
      this.state = {
        step: 1
      };
    };
  changetoStep2 = (...args) => {
    this.props.changetoStep2(...args);
    this.state = {
      step: 2
    };
  };
  changetoStep3 = (...args) => {
    this.props.changetoStep3(...args);
    this.state = {
      step: 3
    };
  };

  _renderStep1() {
    return (
      <Component1
         changetoStep2={this.changetoStep2}
      />
    );
  }
  _handleClickSaveButton = event => {
    //console.log(this.refs, 'this is the refs <<<<<<<<<');
    this.props.onUpdateAdventureCard(this.props.adventureCard.id, {
      // url: this.props.adventureCard.url,
      url: this.refs.url.value,
      location: this.refs.location.value,
      description: this.refs.description.value
    });
    this.setState({
      editMode: false
    });
  };

  _renderStep2() {
    return (
      <Component2 changetoStep3={this.changetoStep3}
      />
    );
  }
  _renderStep3() {
    return (
      <Component3
         changetoStep1={this.changetoStep1}
      />
    );
  }
}
