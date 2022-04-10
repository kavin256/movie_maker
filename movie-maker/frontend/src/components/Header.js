import React from 'react'

export default function header() {
  return (
    <div className='topnav'>
        <a className='logo' href='/'>Movie Maker</a>
        <div className='search-container'>
            <form>
                <a href='/'>
                    Add Movies
                </a>
                <input type="text" placeholder="Search.." name="search"></input>
                <button type='submit'>
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
        </div>
    </div>
  )
}
