import React from 'react';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Header,
  Progress
} from 'semantic-ui-react';
export default function SenderAddressFormLayout(prop) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  };

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
        {prop.children[0]}
      </Container>
    </div>
  );
}
