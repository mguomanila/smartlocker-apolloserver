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
			const lockerTimeLimit: LockerTimeLimitInterface = await dataSources.RESTApi.getLockerTimeLimits(userIds)
			return lockerTimeLimit
		}
	},
	Mutation: {
		lockerTimeLimits: async(_: any,  { ltl, id, queryType }: any, { dataSources }: any) => {
			switch (queryType){
				case QueryType.update:

			}
		}
	}
}

export default resolvers

export enum QueryType {
	update = 'update',
	insert = 'insert',
	upsert = 'upsert',
}