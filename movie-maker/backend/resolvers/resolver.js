const Movie = require('../model/model')



const resolver = {
    movies: () => {
        // for finding all the movies
        return Movie.find({})
    },
    movieByName: (args) => {
        return Movie.findOne({name: args.name})
    },
    addMovie: (args) => {
        let movie = new Movie({
            name: args.name,
            genre: args.genre,
            year: args.year
        })
        movie.save()
        return movie
    }
}

module.exports = resolver