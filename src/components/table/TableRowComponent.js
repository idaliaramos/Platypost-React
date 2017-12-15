import React, { Component } from 'react';
import { Table, Header, Container, Divider } from 'semantic-ui-react';

export default class TableRow extends Component {
  render() {
    const history = this.props.historyData;
    console.log(this.props, 'history');
    return (
      <div>
        <Table.Row>
          <Table.Cell>mail.date</Table.Cell>
          <Table.Cell>
            Idalia Ramos 229 Haight St apt 176 San Francisco CA 94110
            mail.receiverAddress
          </Table.Cell>
          <Table.Cell>
            Galvanize 435 howard st san francicco ca 94101 mail.senderAddress
          </Table.Cell>
          <Table.Cell>view postcard (maybe image url? )</Table.Cell>
        </Table.Row>
      </div>
    );
  }
}
