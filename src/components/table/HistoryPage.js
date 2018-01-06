import React, { Component } from 'react';
import { Table, Header, Container, Divider } from 'semantic-ui-react';
import NavComponent from '../../components/nav/NavComponent';

import TableRowComponent from './TableRowComponent';

export default class HistoryPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
                  {/* {this.props.historyData ? this.props.historyData.to : 'hello'} */}
                  Expected Delivery Data
                </Table.HeaderCell>
                <Table.HeaderCell>To</Table.HeaderCell>
                <Table.HeaderCell>From</Table.HeaderCell>
                <Table.HeaderCell>Postcard Status</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {this.props.historyData &&
                this.props.historyData
                  .reduce(function(a, b) {
                    return a.concat(b);
                  }, [])
                  .map(data => <TableRowComponent data={data} key={data.id} />)}
            </Table.Body>
          </Table>
        </Container>
      </div>
    );
  }
}
