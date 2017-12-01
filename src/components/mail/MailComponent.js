import React from 'react';

import AddressFormFieldComponent from '../AddressFormFieldComponent';
import MailPageLayout from './MailPageLayout';
import NavComponent from '../nav/NavComponent';
import { Grid, Container, Table, Segment } from 'semantic-ui-react';
export default function MailComponent(props) {
  return (
    <div>
      <NavComponent />
      <Segment>
        <AddressFormFieldComponent />
      </Segment>
    </div>
    //   <Container>
    //     <Grid divided="vertically">
    //       <Grid.Row columns={2}>
    //         <Grid.Column>
    //           <AddressFormFieldComponent />
    //         </Grid.Column>
    //         <Grid.Column>
    //           <AddressFormFieldComponent />
    //         </Grid.Column>
    //       </Grid.Row>
    //     </Grid>
    //   </Container>
  );
}
