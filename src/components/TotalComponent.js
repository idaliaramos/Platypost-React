import React from 'react';
import { Table } from 'semantic-ui-react';

const TotalComponent = () =>
  <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell>Quantity</Table.HeaderCell>
        <Table.HeaderCell>Total</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Postcard</Table.Cell>
        <Table.Cell />
        <Table.Cell>1</Table.Cell>
        <Table.Cell>1.75</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>;

export default TotalComponent;
