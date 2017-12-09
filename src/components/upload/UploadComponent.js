import React, { Component } from 'react';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Header,
  Progress,
  Button
} from 'semantic-ui-react';
import CustomReactS3Uploader from '../CustomReactS3Uploader';
export default class UploadComponent extends Component {
  static defaultProps = {
    onNext: () => {}
  };
  //check, change for it not to be in the state
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  _handleClick = event => {
    event.preventDefault();

    const { url } = this.state;
    this.props.onNext({ url: url.trim() });
  };
  render() {
    return (
      <div>
        <Divider hidden />
        <Divider hidden />
        <Container>
          <Segment inverted>
            <Divider horizontal inverted>
              Upload Image
            </Divider>
          </Segment>
          <Progress color="yellow" value="0" total="3" progress="ratio" />
          <Grid>
            <Grid.Column>
              <CustomReactS3Uploader />
              <Divider hidden />
              <Divider hidden />
            </Grid.Column>
          </Grid>
          <Button color="purple" onClick={this._handleClick}>
            Next
          </Button>
        </Container>
      </div>
    );
  }
}
