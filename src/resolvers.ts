
const resolvers = {
	Query: {
		lockerTimeLimits: async(_: any, { userIds }: any, { dataSources }: any) => {
			const lockerTimeLimit: ILockerTimeLimit | string = await dataSources.RESTApi.getLockerTimeLimits(userIds)
			if(lockerTimeLimit == 'error') return false
			return lockerTimeLimit
		},
		lockerUserTypes: async(_: any, { id }: any, { dataSources }: any) => {
			const lockerUserType: ILockerUserTypes[] | string = await dataSources.RESTApi.getLockerUserTypes(id)
			if(lockerUserType == 'error') return false
			return lockerUserType
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
		lockerTimeLimits: async(_: any,  { data, id }: {data: ILockerUserTypes[], id: number}, { dataSources }: any) => {
			const resp: {
				status: boolean
				description: string
			} = await dataSources.RESTApi.updatePostLockerTimeLimits(id, data)
			return resp
		},
		lockerUserTypes: async(_: any,  { data, }: {data: ILockerUserTypes[]}, { dataSources }: any) => {
			const resp: {
				status: boolean
				description: string
			} = await dataSources.RESTApi.postLockerUserTypes(data)
			return resp
		}
	}
}

export default resolvers

export interface User{
	id: string
	name: string
	email: string
}

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
export interface ILockerTimeLimit {
	lockerType: number
	pickupTimeLimit: number
	pickupReclaimTimeLimit?: number
	bookingExpiry: number
	shipoutTimeLimit: number
	shipoutReclaimTimeLimit: number
	storageTimeLimit: number
	storageReclaimTimeLimit: number
}
export interface ILockerUserTypes{
	id: number
	userIds: number
	lockerUserType: string
	description: string
	monthlyFee: number
}