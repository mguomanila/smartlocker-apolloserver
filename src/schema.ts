import { gql } from 'apollo-server'

export const typeDefs = gql`
	type LockerTimeLimits {
		id: ID
		lockerType: Int
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
		id: Int
		userIds: Int
		lockerUserType: String
		description: String
		monthlyFee: Int
	}
	type CourierType{
		lockerType: Int
		courierType: String
		description: String
		monthlyFee: Int
	}
	type Settings{
		lockerType: Int
		sendAlertVia: String
		smsMessage: String
		appMessageSameAsSms: String
		appMessage: String
	}
	type Query{
		user(id: ID): User
		email(email: ID): User
		lockerTimeLimits(userIds: ID): LockerTimeLimits
		lockerUserTypes(id: ID): [LockerUserTypes]
		courierType(id: ID): CourierType
		settings(id: ID): Settings
	}
	type Mutation {
		lockerTimeLimits(data: LockerTimeLimitsInput, id: ID): MutationResp!
		lockerUserTypes(data: [LockerUserTypesInput!]): MutationResp!
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
		lockerType: Int
		pickupTimeLimit: Int
		pickupReclaimTimeLimit: Int
		bookingExpiry: Int
		shipoutTimeLimit: Int
		shipoutReclaimTimeLimit: Int
		storageTimeLimit: Int
		storageReclaimTimeLimit: Int
	}
	input LockerUserTypesInput{
		id: Int!
		userIds: Int!
		lockerUserType: String
		description: String
		monthlyFee: Int
	}
`