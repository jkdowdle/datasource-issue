import { ApolloServer } from 'apollo-server'
import { RESTDataSource } from 'apollo-datasource-rest'

import typeDefs from './schema'
import resolvers from './resolvers'

import './test'

class PeopleAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:5000/api'
  }

  async find() {
    return this.get('people')
  }

  async findOne(id) {
    return this.get(`people/${id}`)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      people: new PeopleAPI()
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
