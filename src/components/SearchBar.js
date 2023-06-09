import React from 'react';
import Filters from './Filters';
import SearchFields from './SearchFields';

function SearchBar(){
    return (
        <div className='search-bar'>
            <Filters />
            <SearchFields />
            <button className='submit-button'>Let's go!</button>
        </div>
    )
}

export default SearchBar;