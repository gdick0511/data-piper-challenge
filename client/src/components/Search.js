import React from 'react'

function Search({search, setSearch}) {
    return (
        <div>
            <label>Search</label>
                <input
                    className=''
                    type='text'
                    placeholder='serach by Client or Role'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
        </div>
    )
}

export default Search
