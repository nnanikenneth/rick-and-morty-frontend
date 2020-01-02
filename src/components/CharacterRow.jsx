import React from 'react';
import { Image, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Episodes } from './Episodes.jsx';

export const CharacterRow = props => (
  <Table.Row>
    <Table.Cell>
      {props.character.id}
    </Table.Cell>
    
    <Table.Cell >
        <a href={props.character.image}> 
          <Image
            style={{ display:'inline-block'}}
            src={props.character.image}
            alt=""
            size="small"
            rounded
          />
        </a>
        <br/>
        {props.character.name}
    </Table.Cell>
    
    <Table.Cell>
        {props.character.origin}
    </Table.Cell>

    <Table.Cell>
        {props.character.status}
    </Table.Cell>
    
    <Table.Cell>
        {props.character.gender}
    </Table.Cell>

    <Table.Cell>
        {props.character.location}
    </Table.Cell>

    <Table.Cell>
        <Episodes episodes={props.character.episodes}/>
    </Table.Cell>

    <Table.Cell>
      {props.character.species}
    </Table.Cell>
  </Table.Row>
);

CharacterRow.propTypes = {
  character: PropTypes.object.isRequired,
};
