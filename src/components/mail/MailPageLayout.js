import React from 'react';
// import NavigationComponent from '../nav/NavigationComponent';
import TotalComponent from '../TotalComponent';
import {
  Grid,
  Container,
  Table,
  Segment,
  Image,
  Divider,
  Progress
} from 'semantic-ui-react';
export default function MailPageLayout(props) {
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
            Checkout
          </Divider>
        </Segment>
        <Progress color="yellow" percent={100} progress />
        <Grid stackable>
          <Grid.Column width={9}>
            {props.children[0]}
            <Divider hidden />
            <Divider hidden />
            {props.children[1]}
          </Grid.Column>
          <Grid.Column width={6}>
            {props.children[2]}
            <Divider hidden />
            {props.children[3]}
          </Grid.Column>
        </Grid>
        <Divider hidden />
        {props.children[4]}
      </Container>
    </div>
  );
}
// const MailPage = () =>
//   <div>
//     <NavComponent />
//     <Divider hidden />
//     <Divider hidden />
//     <Container>
//       <Segment inverted>
//         <Divider horizontal inverted>
//           Checkout
//         </Divider>
//       </Segment>
//       <Grid>
//         <Grid.Column width={9}>
//           <FrontPostcardComponent />
//           <Divider hidden />
//           <Divider hidden />
//           <BackPostcardComponent />
//         </Grid.Column>
//         <Grid.Column width={6}>
//           <TotalComponent width={6} />
//           <Checkout />
//         </Grid.Column>
//       </Grid>
//     </Container>
//   </div>;
// export default MailPage;
