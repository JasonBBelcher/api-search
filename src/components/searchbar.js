import React, {Component} from 'react';



const SearchBar = (props) => {
  let _term, onSearch;
  onSearch = props.onSearch;

const search = e => {
  onSearch(_term.value);
};

  return (
    <form>
      <input onChange={search} type="text"
        ref={input => _term = input}
       />
    </form>
  );

};


export default SearchBar;
