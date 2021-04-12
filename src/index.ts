const { GraphQLServer} = require('graphql-yoga')
const { PrismaClient} = require('@prisma/client')

import resolvers from './resolvers/index'

const prisma = new PrismaClient()


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers: resolvers,
  context: {
    prisma
  }
})

server.start(() => {
  console.log("server is live")
})