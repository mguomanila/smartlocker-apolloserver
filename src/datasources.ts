import { RESTDataSource } from 'apollo-datasource-rest'
import axios from 'axios'

import { LockerTimeLimitInterface } from './resolvers'

const API_URI = 'http://localhost:3033/api'

class RESTApi extends RESTDataSource {
	static API: any
	[x: string]: any
	constructor(){
		super()
		this.baseURL = API_URI
	}
	static async store(id: string){
		const API = axios.create({
			baseURL: API_URI
		})
		const resp = await API.get(`/user/${id}`)
		return resp.data
	}
	async getUserCredentials(id: string){
		return this.get(`/user/${id}`)
	}
	async getLockerTimeLimits(id: string){
		return this.get(`/lockertimelimit/${id}`)
	}
	async postLockerTimeLimits(id: string, ){}
	async updatePostLockerTimeLimits(id: string, data: LockerTimeLimitInterface){
		const resp = await this.post(`/lockertimelimit/${id}`, data)
		const description = resp.data
		console.log(resp.data)
		return { status, description }
	}
}

export default RESTApi