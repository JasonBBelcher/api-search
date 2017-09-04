import React, {Component} from 'react';



const SearchBar = (props) => {
  let _term, onSearch;
  onSearch = props.onSearch;

const search = e => {
  onSearch(_term.value);
};

  return (
    <div className="search-bar">
      <h2>Search Star Wars Characters</h2>

      <form>
        <input onChange={search} type="text"
          ref={input => _term = input}
        />
      </form>
    </div>
  );

};


export default SearchBar;
