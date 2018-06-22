import { gql } from 'apollo-server'

export default gql`
  type Query {
    people: [Person!]
    person(id: ID!): Person
  }

  type Person {
    id: ID!
    name: String
    age: Int
  }
`

// const { gql } = require('apollo-server')

// module.export = gql`
//   type Query {
//     people: [Person!]
//     person(id: ID!): Person
//   }

//   type Person {
//     id: ID!
//     name: String
//     age: Int
//   }
// `
