import React, { Component } from 'react'
import Movie from '../components/Movie'
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'

// todo: continue from 6.11 of udemy 
// The GraphQL Apollo (with ReactJS, NodeJS and MongoDB) course

const allMovies = gql`
  {
    movies{
      name
      genre
      year
    }
  }
`

class Movies extends Component {
    state = {
        movies: [
            {id: 1, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 2, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 3, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 4, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 5, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 6, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 7, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 8, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
            {id: 9, name: 'John Wick Parabellum', genre: 'Action', year: 2019, image: "https://rb.gy/cgxzsf"},
        ]
    }
  render() {
    console.log(this.props)
    return (
      <div className='movies'>
          {this.state.movies.map((movie) => {
              return <Movie key={movie.key}
              name={movie.name}
              image={movie.image}
              genre={movie.genre}
              year={movie.year}/>
          })}
      </div>
    )
  }
}

export default graphql(allMovies)(Movies)