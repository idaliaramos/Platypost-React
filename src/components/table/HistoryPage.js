import React, { Component } from 'react';
import { Table, Header, Container, Divider } from 'semantic-ui-react';
import NavComponent from '../../components/nav/NavComponent';

import TableRowComponent from './TableRowComponent';

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.historyData, 'props logs');

    return (
      <div>
        <NavComponent />
        <Divider hidden />
        <Container>
          <Header as="h3" textAlign="center" color="purple">
            History
          </Header>
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  {this.props.historyData ? this.props.historyData.to : 'hello'}
                </Table.HeaderCell>
                <Table.HeaderCell>To</Table.HeaderCell>
                <Table.HeaderCell>From</Table.HeaderCell>
                <Table.HeaderCell>Postcard Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>mail.date</Table.Cell>
                <Table.Cell>
                  {/* {this.props.historyData[0]} */}
                  Idalia Ramos 229 Haight St apt 176 San Francisco CA 94110
                  mail.receiverAddress
                </Table.Cell>
                <Table.Cell>
                  Galvanize 435 howard st san francicco ca 94101
                  mail.senderAddress
                </Table.Cell>
                <Table.Cell>view postcard (maybe image url? )</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>mail.date</Table.Cell>
                <Table.Cell>
                  {/* {this.props.historyData[0]} */}
                  Idalia Ramos 229 Haight St apt 176 San Francisco CA 94110
                  mail.receiverAddress
                </Table.Cell>
                <Table.Cell>
                  Galvanize 435 howard st san francicco ca 94101
                  mail.senderAddress
                </Table.Cell>
                <Table.Cell>view postcard (maybe image url? )</Table.Cell>
              </Table.Row>

              {this.props.historyData &&
                this.props.historyData.map(data =>
                  <TableRowComponent data={data} key={data.id} />
                )}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}

// export default function HistoryPage(props) {
//   console.log(props, 'props');
//   return (
//     <div>
//       <NavComponent />
//       <Divider hidden />
//       <Container>
//         <Header as="h3" textAlign="center" color="purple">
//           History
//         </Header>
//         <Table fixed>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>Date</Table.HeaderCell>
//               <Table.HeaderCell>To</Table.HeaderCell>
//               <Table.HeaderCell>From</Table.HeaderCell>
//               <Table.HeaderCell>Postcard Status</Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>
//           <Table.Body>
//             //will have to map over these
//             <Table.Row>
//               <Table.Cell>mail.date</Table.Cell>
//               <Table.Cell>
//                 Idalia Ramos 229 Haight St apt 176 San Francisco CA 94110
//                 mail.receiverAddress
//               </Table.Cell>
//               <Table.Cell>
//                 Galvanize 435 howard st san francicco ca 94101
//                 mail.senderAddress
//               </Table.Cell>
//               <Table.Cell>view postcard (maybe image url? )</Table.Cell>
//             </Table.Row>
//           </Table.Body>
//         </Table>;
//       </Container>
//     </div>
//   );
// }
