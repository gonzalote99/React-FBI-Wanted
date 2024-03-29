import {useRef} from 'react';
import styled from 'styled-components';

const Search = ({search, setSearch, setPage}) => {
  const searchInput = useRef(null);

  const handleSearch = () => {
    setSearch(searchInput.current.value);
    setPage(1);
  };

  return(
    <SearchForm className='container' onSubmit={(e) => e.preventDefault()}>
  <input 
  ref={searchInput}
    onChange={handleSearch}
    type='search'
    placeholder='search'
    value={search}

    />
      <input type='submit' value='Search' />
    </SearchForm>
  );
};

const SearchForm = styled.div`
display: flex;

& > input {
  border: none;
  outline: none;
  padding: 0.5rem;
  font-size: 1rem;
}

& > input[type="search"] {
  flex: 1;
  background-color: #eee;
}

& > input[type="submit"] {
  background-color: #eee;
  cursor: pointer;
  padding: 0.5em;

  &:hover {
    background-color: #ddd;
    transtion: background-color 0.25s ease-in-out;
  }
}





`;

export default Search;