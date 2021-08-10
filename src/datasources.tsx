import { RESTDataSource } from 'apollo-datasource-rest'

class RESTApi extends RESTDataSource {
	constructor(){
		super()
		this.baseURL = 'http://localhost:3033/api'
	}
	async getLockerTimeLimits(id){
		return this.get(`lockertimelimits/${id}`)
	}
	async postLockerTimeLimits(id, )[

	]
}

export default RESTApi