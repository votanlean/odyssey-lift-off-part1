const gql = require('graphql-tag');

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }
  "Module teach topic "
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author can complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;

module.exports = typeDefs;