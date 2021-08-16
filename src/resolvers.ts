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
	lockerType?: LockerTypes
	pickupTimeLimit?: number
	pickupReclaimTimeLimit?: number
	bookingExpiry?: number
	shipoutTimeLimit?: number
	shipoutReclaimTimeLimit?: number
	storageTimeLimit?: number
	storageReclaimTimeLimit?: number
}

const resolvers = {
	Query: {
		lockerTimeLimits: async(_: any, { userIds }: any, { dataSources }: any) => {
			const lockerTimeLimit: LockerTimeLimitInterface | string = await dataSources.RESTApi.getLockerTimeLimits(userIds)
			console.log(lockerTimeLimit)
			if(lockerTimeLimit == 'error') return false
			return lockerTimeLimit
		},
		user: async (_: any, { id }: any, { dataSources, user }: any ) => {
			return user
		}
	},
	Mutation: {
		lockerTimeLimits: async(_: any,  { data, id }: any, { dataSources }: any) => {
			const resp = await dataSources.RESTApi.updatePostLockerTimeLimits(id, data)
			let status, description
			console.log(resp)
			if(resp){
				status = true
				description = 'success'
			} else {
				status = false
				description = 'error'
			}
			return { status, description }
		}
	}
}

export default resolvers

export enum QueryType {
	update = 'update',
	insert = 'insert',
	upsert = 'upsert',
}