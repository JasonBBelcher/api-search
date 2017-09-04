import React, {Component} from 'react';

const searchingFor = (term) => {
  return (char) => {
    return char.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

const List = (props) => {

  const characters = props.characters;
  const terms = props.searchTerms;
  return (
    <ul>
      {characters.filter(searchingFor(terms)).map(function(char, i){
        return (
          <table className="gridtable">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Eye Color</th>
              <th>Height</th>
              <th>Haircolor</th>
              <th>Homeworld</th>
              <th>Species</th>
            </tr>
            <tr>
              <td>{char.name}</td>
              <td>{char.gender}</td>
              <td>{char.eye_color}</td>
              <td>{char.height}</td>
              <td>{char.hair_color}</td>
              <td><a href={char.homeworld}>Homeworld</a></td>
              <td><a href={char.species}>Species</a></td>
            </tr>

          </table>
        );
      })}
    </ul>
  );
};


export default List;
