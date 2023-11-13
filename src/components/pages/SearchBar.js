import React, { useState } from 'react';
import {FaSearch} from 'react-icons/fa';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = (value) => {
    fetch ("https://jsonplaceholder.typicode.com/photos")
  }

  const handleChange = (value) => {
    setSearchTerm(value)
    fetchData(value)
  };

  return (
    <div className='input-wrapper'>
      <FaSearch id="search-icon"/>
      <input
      type="search"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => handleChange(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
