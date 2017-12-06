import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import Component2 from './Component2';
import Component3 from './Component3';

export default class Component1 extends Component {
  static defaultProps = {
    onNext: () => {}
  };

  _handleClick = event => {
    event.preventDefault();
    this.props.onNext();
  };

  render() {
    return (
      <Card>
        <Image src="/assets/images/avatar/large/matthew.png" />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green" onClick={this._handleClick}>
              Approve
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
