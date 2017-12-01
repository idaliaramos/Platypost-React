import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const History = () =>
  <div>
    <Header as="h3" textAlign="center" color="purple">
      History
    </Header>
    <Table fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>To</Table.HeaderCell>
          <Table.HeaderCell>From</Table.HeaderCell>
          <Table.HeaderCell>Letter</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>11.23.17</Table.Cell>
          <Table.Cell>
            {' '}Idalia Ramos 229 Haight St apt 176 San Francisco CA 94110
          </Table.Cell>
          <Table.Cell>
            Galvanize 435 howard st san francicco ca 94101
          </Table.Cell>
          <Table.Cell>view Letter</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>;
  </div>;
export default History;
