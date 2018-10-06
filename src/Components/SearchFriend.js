import React from 'react';


const SearchFriend = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input type='search' placeholder='search a name'
        className='pa3 bg-lightest-blue' onChange={searchChange}
      />
    </div>
  )
}

export default SearchFriend;