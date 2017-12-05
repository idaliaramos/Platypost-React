import React from 'react';

export default class AdventureCard extends React.Component {
  static defaultProps = {
    onEditAdventureCard: () => {},
    onUpdateAdventureCard: () => {},
    onUpdateTripData: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      step: 1
    };
  }

  render() {
    return (
      <div>
        <Container style={style}>
          {this.state.step === 1 ? this._renderStep1() : this._renderStep2()}
        </Container>
      </div>
    );
  }

  updateTripData = (...args) => {
    this.props.onUpdateTripData(...args);
    this.state = {
      editMode: false
    };
  };
  onCancel = () => {
    this.state = {
      editMode: false
    };
  };
  _renderStep1() {
    return <Component1 onUpdateTripData={this.updateTripData} />;
  }
  _handleEditClick = event => {
    this.setState({
      editMode: true
    });
  };

  _renderStep2() {
    return (
      <div>
        <Component2 id={adventureCard.id} />
      </div>
    );
  }
}
