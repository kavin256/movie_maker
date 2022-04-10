import React from 'react'

export default function AddMovie() {
  return (
    <div className='addMovie'>
        <form onSubmit={() => alert('Movie Added')}>
            <label>Name</label>
            <input type='text' required />
            <label>Genre</label>
            <input type='text' required />
            <label>Year</label>
            <input type='text' placeholder='(Optional)' />
            <button type='submit'>Add Movies</button>
        </form>
    </div>
  )
}
