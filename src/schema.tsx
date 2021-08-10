import { gql } from 'apollo-server'

export const typeDefs = gql`
	enum LockerTypes{
		LockerType1
		LockerType2
		LockerType3
	}
	type LockerTimeLimits{
		lockerTypes: LockerTypes
		pickupTimeLimit: Number
		pickupReclaimTimeLimit: Number
		bookingExpiry: Number
		shipoutTimeLimit: Number
		shipoutReclaimTimeLimit: Number
		storageTimeLimit: Number
		storageReclaimTimeLimit: Number
	}
	type LockerUserTypes{
		lockerUserType: String
		description: String
		monthlyFee: Number
	}
	type UpdateResponse {

	}
	type Mutation{
		lockerTimeLimits(userIds: ID): UpdateResponse!
	}
`