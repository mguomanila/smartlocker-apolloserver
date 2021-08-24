
const resolvers = {
	Query: {
		lockerTimeLimits: async(_: any, { userIds }: any, { dataSources }: any) => {
			const lockerTimeLimit: Partial<LockerTimeLimitInterface> | string = await dataSources.RESTApi.getLockerTimeLimits(userIds)
			if(lockerTimeLimit == 'error') return false
			return lockerTimeLimit
		},
		user: async (_: any, { id }: any, { dataSources, user }: any ) => {
			if(user.email) return user
			return {}
		},
		email: async(_: any, { email }: any, { dataSources, user }: any) => {
			if(user.email) return user
			return {}
		}
	},
	Mutation: {
		lockerTimeLimits: async(_: any,  { data, id }: any, { dataSources }: any) => {
			const resp: {
				status: boolean
				description: string
			} = await dataSources.RESTApi.updatePostLockerTimeLimits(id, data)
			return resp
		}
	}
}

export default resolvers

export enum QueryType {
	update = 'update',
	insert = 'insert',
	upsert = 'upsert',
}

export enum LockerTypes {
	LockerType1,
	LockerType2,
	LockerType3,
}
export interface User{
	id: string
	name: string
	email: string
}
export interface LockerTimeLimitInterface {
	lockerType: LockerTypes
	pickupTimeLimit: number
	pickupReclaimTimeLimit?: number
	bookingExpiry: number
	shipoutTimeLimit: number
	shipoutReclaimTimeLimit: number
	storageTimeLimit: number
	storageReclaimTimeLimit: number
}