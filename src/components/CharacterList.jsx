import React from 'react';
import { Divider, Segment } from 'semantic-ui-react';
import { CharacterTable } from './CharacterTable.jsx';

const queryParams = ['page'];
export default class CharacterList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      page: 1,
      limit: 20,
      totalcount: 0,
      loading: false,
    };
  }

  componentDidMount() {
    this.loadData({});
  }

  onChangePage = (event, data) => {
    const { activePage } = data;
    if (activePage !== this.state.page) {
      this.loadData({ page: activePage });
    }
  };

  loadData = params => {
    const newState = Object.assign({}, this.state, params, { loading: false });
    this.setState({ loading: true });

    queryParams.forEach(function(element) {
      if (!(element in params)) {
        params[element] = newState[element];
      }
    });

    const esc = encodeURIComponent;
    const query = Object.keys(params)
      .map(k => esc(k) + '=' + esc(params[k]))
      .join('&');
      
    fetch(`/charactersinfo`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          this.setState({ totalcount: data.count });
          this.setState({ characters: data.characters });
        });
      } else {
        response.json().then(error => {
          console.log(`Failed to load data: ${error.message}`);
        });
      }

      this.setState(newState, () => {
        fetch('/charactersinfo?' + query).then(response => {
          if (response.ok) {
            response.json().then(data => {
              this.setState({ characters: data.characters });
              this.setState({ totalcount: data.count });
            });
          } else {
            response.json().then(error => {
              console.log(`Failed to load data: ${error.message}`);
            });
          }
          const newState = Object.assign({}, this.state, params, {
            loading: false,
          });
          this.setState(newState);
        });
      });
    });
  };

  render() {
    return (
      <Segment>
        <Divider />
        <CharacterTable
          characters={this.state.characters}
          totalcount={this.state.totalcount}
          totalPages={Math.ceil(this.state.totalcount / this.state.limit)}
          currentpage={this.state.page}
          onChangePage={this.onChangePage}
          limit={this.state.limit.toString()}
        />
      </Segment>
    );
  }
}
