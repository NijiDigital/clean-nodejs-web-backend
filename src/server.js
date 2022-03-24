import Fastify from 'fastify'

const fastify = Fastify()

fastify.get('/', async () => ({ hello: 'world' }))

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

void start()
