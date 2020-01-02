import React from 'react';
import PropTypes from 'prop-types';
import { Table, Pagination } from 'semantic-ui-react';

import { CharacterPageSizeSelect } from './CharacterPageSizeSelect.jsx';
import { CharacterRow } from './CharacterRow.jsx';
import { DashBoardTableHeader } from './DashBoardTableHeader.jsx';

export const CharacterTable = props => {
  if (!props.characters) {
    return <React.Fragment />;
  }
  const characterRows = props.characters.map((character, index) => (
    <CharacterRow key={index} character={character} />
  ));
  
  return (
    <React.Fragment>
      {/* NB: we may need to support more limits in the future */}
      <CharacterPageSizeSelect
        limit={props.limit}
      />
      <Table selectable>
        <DashBoardTableHeader
          column={props.column}
        />

        <Table.Body>{characterRows}</Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="15">
              <Pagination
                totalPages={props.totalPages}
                activePage={props.currentpage}
                onPageChange={props.onChangePage}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>        
      Total count: {props.totalcount}.
    </React.Fragment>
  );
};

CharacterTable.propTypes = {
  totalcount: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentpage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  limit: PropTypes.string.isRequired,
};
