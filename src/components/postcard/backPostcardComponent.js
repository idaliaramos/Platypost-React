import React, { Component } from 'react';
import { Grid, Segment, List, Image } from 'semantic-ui-react';
//do i have to make this a class component? probably
export default class BackPostcardComponent extends Component {
  render() {
    console.log(this.props, ' this.props');
    return (
      <Segment>
        <Grid columns={2} divided>
          <Grid.Row stretched>
            <Grid.Column>
              <Segment>
                {this.props.receiverInfo.message}
              </Segment>
            </Grid.Column>

            <Grid.Column>
              <Image size="tiny" src="http://bit.ly/2AsHCYB" />
              <List>
                <List.Item>
                  {this.props.senderInfo.name}
                </List.Item>
                <List.Item>
                  {' '}{this.props.senderInfo.address_line1}
                </List.Item>
                <List.Item>
                  {this.props.senderInfo.address_city}
                  {this.props.senderInfo.address_state}
                  {this.props.senderInfo.address_zip}
                </List.Item>
              </List>
              <List>
                <List.Item>
                  {this.props.receiverInfo.name}
                </List.Item>
                <List.Item>
                  {this.props.receiverInfo.address_line1}
                </List.Item>
                <List.Item>
                  {this.props.receiverInfo.address_city}
                  {this.props.receiverInfo.address_state}{' '}
                  {this.props.receiverInfo.address_zip}
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}
