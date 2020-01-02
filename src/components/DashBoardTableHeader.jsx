import { Table } from 'semantic-ui-react';
import React from 'react';

export function DashBoardTableHeader(props) {
  return (
    <Table.Header>
      <Table.Row>

        <Table.HeaderCell
          width={1}
        >
          #
        </Table.HeaderCell>

        <Table.HeaderCell
          width={3}
        >
          Name
        </Table.HeaderCell>

        <Table.HeaderCell
          width={1}
        >
          Origin
        </Table.HeaderCell>

        <Table.HeaderCell
          width={2}
        >
          Status
        </Table.HeaderCell>

        <Table.HeaderCell
          width={1}
        >
          Gender
        </Table.HeaderCell>

        <Table.HeaderCell
          width={1}
        >
          Location
        </Table.HeaderCell>
        
        <Table.HeaderCell
          width={4}
        >
          Episodes
        </Table.HeaderCell>
        
        <Table.HeaderCell
          width={1}
        >
          Species
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}