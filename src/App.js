import React, { Component } from 'react';
import SearchBar from './components/SearchBar.js';
import fetch from 'isomorphic-fetch';

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

    // search version 1
    function searchingFor(term){
      return function(char){
        return char.toLowerCase().includes(term.toLowerCase()) || !term;
      };
    }
    // search version 2
    function searchingFor2(term){
      return function(char){
        return char.toLowerCase().indexOf(term.toLowerCase()) > -1;
      };
    }


    const charNames = this.state.charNames;
    const loading = this.state.loading;

    return (!loading) ?
      <div>

        <SearchBar onSearch={this.searchHandler}/>
        <ul>
          {charNames.filter(searchingFor2(this.state.term)).map(function(char, i){
            return <li key={i}>{char}</li>;
          })}
        </ul>
      </div> :
      <div>Loading...</div>;

  }
}
export default App;
