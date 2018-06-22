export default {
  Query: {
    people: (root, args, { dataSources }) => {
      return dataSources.people.find()
    },
    person: (root, { id }, { dataSources }) => {
      return dataSources.people.findOne(id)
    }
  }
}
