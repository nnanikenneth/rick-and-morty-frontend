import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const limitOptions = [
  { key: '1', value: '20', text: '20' },
];

export const CharacterPageSizeSelect = props => (
  <React.Fragment>
    Records per page:{' '}
    <Dropdown
      inline
      options={limitOptions}
      defaultValue={limitOptions.value}
    />
  </React.Fragment>
);
