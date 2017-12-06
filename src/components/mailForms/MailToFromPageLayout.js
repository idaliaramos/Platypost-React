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
export default function MailToFromPageLayout(prop) {
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
            Send To
          </Divider>
        </Segment>
        <Progress color="yellow" value="1" total="3" progress="ratio" />
        <Grid>
          <Grid.Column width={9}>
            {prop.children[0]}
            <Divider hidden />
            <Divider hidden />
          </Grid.Column>
          <Grid.Column width={6}>
            {prop.children[1]}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
