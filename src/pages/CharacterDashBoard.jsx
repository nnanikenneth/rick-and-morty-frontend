import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import CharacterList from '../components/CharacterList';
import DashBoardHeader  from '../components/DashBoardHeader'

export default class App extends Component {
  render() {
    return (
      <div>
        <DashBoardHeader/>
        <Container style={{ padding: '2em 0em' }}>
          <CharacterList/>
        </Container>
      </div>
    );
  }
}
