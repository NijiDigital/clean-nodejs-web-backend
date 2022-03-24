import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'

const dbConnector = async (fastify) => {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: 'mongodb://localhost:27017/dev-db',
  })
}

const dbConnectorPlugin = fastifyPlugin(dbConnector)

export default dbConnectorPlugin
