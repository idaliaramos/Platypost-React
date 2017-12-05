// import React from 'react';
// import { Table } from 'semantic-ui-react';
//
// const BackPostcardComponent = () =>
//   <Table fixed>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>To</Table.HeaderCell>
//         <Table.HeaderCell />
//         <Table.HeaderCell />
//       </Table.Row>
//     </Table.Header>
//
//     <Table.Body>
//       <Table.Row>
//         <Table.Cell>
//           Hi! We are having a great time in Hawaii! We went to see this
//           beautiful waterfall an took a wonderful path with lots of beautiful
//           plants. Miss you,
//         </Table.Cell>
//         <Table.Cell />
//         <Table.Cell>sent by: platypus.co </Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>Idalia and Michael</Table.Cell>
//         <Table.Cell>test</Table.Cell>
//         <Table.Cell>To:</Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell />
//         <Table.Cell />
//         <Table.Cell>Mom 229 Haight st 176 San Francisco CA 94102</Table.Cell>
//       </Table.Row>
//     </Table.Body>
//   </Table>;
//
// export default BackPostcardComponent;
import React from 'react';
import { Grid, Segment, List, Image } from 'semantic-ui-react';

const BackPostcardComponent = () =>
  <Grid columns={2} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>
          {' '}dear jelly, we are having a great time in hawaii, Thank for the
          recommendations, we will see you soon. Love, Marmar
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Image size="tiny" src="http://bit.ly/2AsHCYB" />
        <List>
          <List.Item>Idalia</List.Item>
          <List.Item>1986 Yosemite Road</List.Item>
          <List.Item>Berkely CA 94102</List.Item>
        </List>
        <List>
          <List.Item>Zak</List.Item>
          <List.Item>1986 Yosemite Road</List.Item>
          <List.Item>Berkely CA 94102</List.Item>
        </List>
      </Grid.Column>
    </Grid.Row>
  </Grid>;

export default BackPostcardComponent;
