import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'

import RESTApi from './datasources'

const isEmail = {
	validate: email => {
		// todo: validate email here
		return email
	}
}

const server = new ApolloServer({
	context: async({ req }) => {
		// simple auth check on every request
		const auth = req.headers && req.headers.authorization || ''
		const email = Buffer.from(auth, 'base64').toString('ascii')
		if (!isEmail.validate(email)) return { user: null }
		const user = users && users[0] || null
		return { user:  { ...user.dataValues }}
	}
})