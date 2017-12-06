import React from 'react';
import NavComponent from '../nav/NavComponent';
import SenderAddressComponent from '../SenderAddressComponent';
import SenderAddressFormLayout from './SenderAddressFormLayout';
import {
  Form,
  Container,
  Header,
  Divider,
  Button,
  Progress,
  Segment,
  Grid
} from 'semantic-ui-react';
export default function SenderAddressForm(props) {
  return (
    <div>
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment inverted>
          <Divider horizontal inverted>
            From
          </Divider>
        </Segment>
        <Progress color="yellow" value="2" total="3" progress="ratio" />
        <Grid centered>
          <Grid.Column width={12}>
            <SenderAddressComponent
              onNext={props.onNext}
              onPrevious={props.onPrevious}
              onChange={props.onChange}
              senderInfo={props.senderInfo || {}}
            />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
