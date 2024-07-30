import React from 'react'

const Search = ({onSearch}) => {
    const [destination, setDestination] = React.useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(destination);
    };

  return (
    <>
      <form onSubmit={handleSearch} className="mb-4">
            <input 
                type="text" 
                placeholder="Enter destination" 
                value={destination} 
                onChange={(e) => setDestination(e.target.value)} 
                className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-2">Search</button>
        </form>
    </>
  )
}

export default Search
