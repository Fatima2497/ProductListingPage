import React from 'react'

const SearchBar = ({ searchItem, onSearchChange }) => {
    return (
        
            <input 
            type='text' 
            placeholder='Search by product name' 
            className='w-full border px-5 py-2 rounded-full' 
            value={searchItem}
            onChange={(e)=> onSearchChange(e.target.value)}
            />


    )
}

export default SearchBar