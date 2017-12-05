import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default function LoginPageLayout(props) {
  return (
    <Grid centered columns={2}>
      {props.children[0]}
      <Grid.Column>
        {props.children[1]}
      </Grid.Column>
    </Grid>
  );
}
