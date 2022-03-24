const routesPlugin = async (fastify) => {
  const animalsCollection = fastify.mongo.db.collection('animals')

  fastify.get('/', async () => ({ hello: 'world' }))

  fastify.get('/animals', () => animalsCollection.find().toArray())
}

export default routesPlugin
