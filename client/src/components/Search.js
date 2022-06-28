import React from 'react'

function Search({search, setSearch}) {
    return (
        <div>
            <label id='searchFontSize'>Search </label>
                <input
                    className='searchInput'
                    type='text'
                    placeholder=' Serach by Client or Role'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
        </div>
    )
}

export default Search
