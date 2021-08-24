import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import resolvers from './resolvers'

import RESTApi from './datasources/rest_api'

export interface User{
	id: string
	name: string
	email: string
}

const context = async({ req }: any) => {
	// simple auth check on every request
	const email = req.headers && req.headers.authorization || ''
	// const email: string | null = Buffer.from(auth, 'base64').toString('ascii')
	// if (!isEmail.validate(email)) return { user: null }
	const user: User = await RESTApi.store(email)
	return { user:  { ...user }}
} 

const server = new ApolloServer({
	context,
	typeDefs,
	dataSources: () => ({ RESTApi: new RESTApi }),
	resolvers,
	introspection: true,
})

const port = process.env.PORT || 3031
const uri = `http://localhost:${port}`
server.listen({port}).then(res => {
	console.log(`
    Server is running!
    Listening on port: ${port}
    Explore at ${uri}
	`)
})