import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SearchBar from './components/SearchBar.js';
import List from './components/List.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charNames: [],
      loading: false,
      term: ''
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({term: event});
  }

  componentDidMount(){
    const url = 'https://swapi.co/api/people';
    this.setState({loading: true});
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(json => json.results.map((char) => {
      return char.name;
    }))
    .then((charNames) => {
      return this.setState({charNames, loading: false});
    });
  }




  render() {


    const charNames = this.state.charNames;
    const loading = this.state.loading;

    return (!loading) ?
      <div>

        <SearchBar onSearch={this.searchHandler}/>
        <List characters={charNames} searchTerms={this.state.term}/>
      </div> :
      <div>Loading...</div>;

  }
}
export default App;
