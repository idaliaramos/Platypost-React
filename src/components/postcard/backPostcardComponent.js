import React, { Component } from 'react';
import { Grid, Segment, List, Image } from 'semantic-ui-react';
//do i have to make this a class component? probably
export default class BackPostcardComponent extends Component {
  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Segment>
              {this.props.message}
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Image size="tiny" src="http://bit.ly/2AsHCYB" />
            <List>
              <List.Item>
                {this.props.senderName}
              </List.Item>
              <List.Item>1986 Yosemite Road</List.Item>
              <List.Item>Berkely CA 94102</List.Item>
            </List>
            <List>
              <List.Item>Zak</List.Item>
              <List.Item>1986 Yosemite Road</List.Item>
              <List.Item>Berkely CA 94102</List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
