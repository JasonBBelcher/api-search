import React, { Component } from 'react';
import SearchBar from './components/SearchBar.js';
import TableList from './components/TableList.js';
import gridtable from './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: [],
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
      return char;
    }))
    .then((char) => {
      return this.setState({characters: char, loading: false});
    });
  }




  render() {


    const characters = this.state.characters;
    const loading = this.state.loading;

    return (!loading) ?
      <div>

        <SearchBar onSearch={this.searchHandler}/>
        <TableList characters={characters} searchTerms={this.state.term}/>
      </div> :
      <div>Loading...</div>;

  }
}
export default App;
