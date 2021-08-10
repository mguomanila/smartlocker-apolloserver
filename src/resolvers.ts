enum LockerTypes {
	LockerType1,
	LockerType2,
	LockerType3,
}
interface User{
	id: string
	name: string
	email: string
}
interface LockerTimeLimit {
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
			const lockerTimeLimit: LockerTimeLimit = await dataSources.RESTApi.getLockerTimeLimits(userIds)
			return lockerTimeLimit
		}
	},
}

export default resolvers