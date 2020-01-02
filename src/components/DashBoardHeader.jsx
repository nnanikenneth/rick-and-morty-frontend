import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

export default class App extends Component {
    render() {
      return (
      <Header style={{backgroundColor: "black", padding: '0.3em 0.8em'}} as="h3">  
        <div style={{backgroundColor: "black", padding: '0.3em 0.8em'}}>
            <div  style={{ color: 'red', textAlign: 'center', alignSelf: 'center'  }}>
                  Rick and Morty Characters
            </div>
        </div>
      </Header>
      );
    }
  }
  