import { gql } from 'apollo-server'

export const typeDefs = gql`
	enum LockerTypes{
		LockerType1
		LockerType2
		LockerType3
	}
	type LockerTimeLimits{
		id: ID
		lockerType: LockerTypes
		pickupTimeLimit: Int
		pickupReclaimTimeLimit: Int
		bookingExpiry: Int
		shipoutTimeLimit: Int
		shipoutReclaimTimeLimit: Int
		storageTimeLimit: Int
		storageReclaimTimeLimit: Int
	}
	type User{
		id: ID
		name: String
		email: ID
	}
	type LockerUserTypes{
		lockerUserType: String
		description: String
		monthlyFee: Int
	}
	type Query{
		lockerTimeLimits(userIds: ID): LockerTimeLimits!
	}
`