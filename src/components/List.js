import React, {Component} from 'react';

// not used just a second way
function searchingFor2(term){
  return function(char){
    return char.toLowerCase().indexOf(term.toLowerCase()) > -1;
  };
}


const searchingFor = (term) => {
  return (char) => {
    return char.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};



const List = (props) => {

  const charNames = props.characters;
  const terms = props.searchTerms;
  return (
    <ul>
      {charNames.filter(searchingFor(terms)).map(function(char, i){
        return <li key={i}>{char}</li>;
      })}
    </ul>
  );
};


export default List;
