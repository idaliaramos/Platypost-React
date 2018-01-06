import React, { Component } from 'react';
import { Table, Header, Container, Divider, List } from 'semantic-ui-react';

export default class TableRow extends Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>
          {this.props.data.createdAt}
        </Table.Cell>
        <Table.Cell>
          {this.props.data.mailData.to.name}
          {/* <Divider hidden /> */}
          {this.props.data.mailData.to.address_line1}
          {this.props.data.mailData.to.address_city}
          {this.props.data.mailData.to.address_state}
          {this.props.data.mailData.to.address_zip}
        </Table.Cell>
        <Table.Cell>
          <List.Item>
            {this.props.data.mailData.from.name}
            {this.props.data.mailData.from.address_line1}
            {this.props.data.mailData.from.address_city}
            {this.props.data.mailData.from.address_state}
            {this.props.data.mailData.from.address_zip}
          </List.Item>
        </Table.Cell>
        <Table.Cell>
          {this.props.data.mailData.tracking_number}
        </Table.Cell>
      </Table.Row>
    );
  }
}
