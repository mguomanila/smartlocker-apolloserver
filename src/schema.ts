import { gql } from 'apollo-server'

export const typeDefs = gql`
	enum LockerTypes{
		LOCKERTYPE1
		LOCKERTYPE2
		LOCKERTYPE3
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
		user(id: ID): User
		email(email: ID): User
	}
	type Mutation {
		lockerTimeLimits(data: LockerTimeLimitsInput, id: ID): MutationResp!
	}
	enum QueryType {
		update
		insert
		upsert
	}
	type MutationResp {
		status: Boolean
		description: String
	}
	input LockerTimeLimitsInput {
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
`