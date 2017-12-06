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
import CustomReactS3Uploader from '../../CustomReactS3Uploader';
export default class UploadComponent extends Component {
  static defaultProps = {
    onNext: () => {}
  };
  // would be better practice to put in the constructor
  constructor(props) {
    super(props);
    this.state = {
      url: ''
    };
  }

  _handleClick = event => {
    event.preventDefault();
    console.log(this.state, 'this is the state in upload');
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
