const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolvers/resolver')

mongoose.connect('mongodb+srv://admin:admin@cluster0.bxhy7.mongodb.net/moviemaker?retryWrites=true&w=majority', {})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('Error', err))

// setting up graphql
// graphiql is a tool like postman
app.use('/graphql', graphqlHTTP({
    schema: movieSchema,
    graphiql: true,
    rootValue: resolvers
}))

app.get('/', (req, res) => {
    res.send('Hello from backend App.js');
})

app.listen(4000, () => {
    console.log('server on port 4000')
})