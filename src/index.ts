import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import resolvers from './resolvers'

import RESTApi from './datasources'

const isEmail = {
	validate: (email: string | null) => {
		// todo: validate email here
		return email
	}
}

interface User{
	id: string
	name: string
	email: string
}

const server = new ApolloServer({
	context: async({ req }) => {
		// simple auth check on every request
		const auth = req.headers && req.headers.authorization || ''
		const email: string | null = Buffer.from(auth, 'base64').toString('ascii')
		if (!isEmail.validate(email)) return { user: null }
		const user: User = await RESTApi.store()
		console.log(user)
		return { user:  { ...user }}
	},
	typeDefs,
	dataSources: () => ({ RESTApi: new RESTApi }),
	resolvers,
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