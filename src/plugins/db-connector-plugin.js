import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'

const dbConnector = async (fastify) => {
  fastify.register(fastifyMongo, {
    forceClose: true,
    url: fastify.config.mongoDbUrl,
  })
}

const dbConnectorPlugin = fastifyPlugin(dbConnector)

export default dbConnectorPlugin
