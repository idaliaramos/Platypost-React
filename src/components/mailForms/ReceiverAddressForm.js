import React from 'react';

import ReceiverAddressComponent from '../ReceiverAddressComponent';
import MailToFromPageLayout from './MailToFromPageLayout';

import NavComponent from '../nav/NavComponent';
import FrontPostcardComponent from '../postcard/FrontPostcardComponent';
import Checkout from '../Checkout';
import TotalComponent from '../TotalComponent';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Header
} from 'semantic-ui-react';
export default function ReceiverAddressForm(props) {
  return (
    <div className="ReceiverAddressForm">
      <MailToFromPageLayout>
        <FrontPostcardComponent />
        <ReceiverAddressComponent
          onNext={props.onNext}
          onPrevious={props.onPrevious}
          onChange={props.onChange}
          receiverInfo={props.receiverInfo || {}}
        />
      </MailToFromPageLayout>
    </div>
  );
}
//working below
// const ReceiverAddressForm = () =>
//   <div>
//     <NavComponent />
//     <Divider hidden />
//     <Divider hidden />
//     <Container>
//       <Segment inverted>
//         <Divider horizontal inverted>
//           Send To
//         </Divider>
//       </Segment>
//       <Header sub textAlign="left">
//         PostCard Preview
//       </Header>
//       <Grid>
//         <Grid.Column width={9}>
//           <Image
//             src="https://www.ncl.com/sites/default/files/Hawaii.Tip2016_4.jpg"
//             size="big"
//           />
//           <Divider hidden />
//           <Divider hidden />
//         </Grid.Column>
//         <Grid.Column width={6}>
//           <ReceiverAddressComponent />
//         </Grid.Column>
//       </Grid>;
//     </Container>;
//   </div>;
// export default ReceiverAddressForm;