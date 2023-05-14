import React from 'react';

function Filters(){
    return (
        <div className='filters'>
            <button className='filter-button' type='button'>Best Match</button>
            <button className='filter-button' type='button'>Highest Rated</button>
            <button className='filter-button' type='button'>Most Reviewed</button>
        </div>
    )
}

export default Filters;