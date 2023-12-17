import React from 'react'
import './SearchCollege.css'
import { useState } from 'react';
const SearchBar = ({onSearch}) => {
        
        const [searchTerm, setSearchTerm] = useState('');
      
        const handleInputChange = (event) => {
          setSearchTerm(event.target.value);
        };
      
        const handleSearch = () => {
          onSearch(searchTerm);
        };
      
        return (
            <>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-container">
          <button onClick={handleSearch}><b>Search</b></button>
        </div>
        
        </>
        );
}

export default SearchBar
