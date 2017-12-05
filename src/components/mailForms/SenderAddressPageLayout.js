// import React from 'react';
// import {
//   Grid,
//   Container,
//   Table,
//   Segment,
//   Image,
//   Divider,
//   Header
// } from 'semantic-ui-react';
// export default function SenderAddressPageLayout(prop) {
//   const style = {
//     display: 'flex',
//     flexDirection: 'row',
//     flexWrap: 'wrap'
//   };
//   return (
//     <div>
//       {/* <div style={style}> */}
//       {prop.children[0]}
//       {prop.children[1]}
//       {prop.children[2]}
//       {prop.children[3]}
//       {/* </div> */}
//     </div>
//   );
// }
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
    // <div>
    //   <div style={style}>
    //     {prop.children[0]}
    //     {prop.children[1]}
    //     {prop.children[2]}
    //     {prop.children[3]}
    //   </div>
    // </div>
    <div>
      {prop.children[0]}

      <Divider hidden />
      <Divider hidden />
      <Container>
        <Segment inverted>
          <Divider horizontal inverted>
            From
          </Divider>
        </Segment>
        <Progress color="yellow" value="2" total="3" progress="ratio" />

        <Grid centered container>
          <Grid.Column width={12}>
            {prop.children[1]}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
