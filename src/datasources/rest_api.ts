import { RESTDataSource } from 'apollo-datasource-rest'
import axios from 'axios'

import { ILockerTimeLimit, ILockerUserTypes } from '../resolvers'

const API_URI = 'http://localhost:3033/api'

class RESTApi extends RESTDataSource {
	static API: any
	[x: string]: any
	constructor(){
		super()
		this.baseURL = API_URI
	}
	static async store(email: string){
		const API = axios.create({
			baseURL: API_URI
		})
		const resp = await API.get(`/user/email/${email}`)
		return resp.data
	}
	async getUserCredentialEmail(email: string){
		return this.get(`/user/email/${email}`)
	}
	async getUserCredentialId(id: string){
		return this.get(`/user/id/${id}`)
	}
	async getLockerTimeLimits(id: number){
		return this.get(`/lockertimelimit/${id}`)
	}
	async postLockerTimeLimits(id: string, ){}
	async updatePostLockerTimeLimits(id: string, data: ILockerTimeLimit){
		const resp: {
			status: boolean
			description: string
		} = await this.post(`/lockertimelimit/${id}`, data)
		return resp
	}
	async getLockerUserTypes(userIds: number){
		console.log('userids', userIds)
		const resp: ILockerUserTypes[] = await this.get(`/lockerusertypes/${userIds}`)
		return resp
	}
	async postLockerUserTypes(data: ILockerUserTypes[]){
		console.log('post', data)
		const resp: {
			status: boolean
			description: string
		} = await this.post(`/lockerusertypes/`, data)
		return resp
	}
}

export default RESTApi