const { ApolloServer, gql } = require('apollo-server');
const typedefs = gql `
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}`;

const books = [
    {
        title: 'Harry Potter',
        author: 'J.K Rowling'
    },
    {
        title: 'Twilight',
        author: 'Stephanie Meyer'
    }
]

const resolvers = {
    Query: {
        books: () => books,
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
});

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
});