import { RESTDataSource } from 'apollo-datasource-rest'
import axios from 'axios'

class RESTApi extends RESTDataSource {
	constructor(){
		super()
		this.baseURL = 'http://localhost:3033/api'
	}
	async getLockerTimeLimits(id: string){
		return this.get(`lockertimelimits/${id}`)
	}
	async postLockerTimeLimits(id: string, ){}
	static async store(){
		const baseurl = 'http://localhost:3033/api'
		const resp = await axios.get(`${baseurl}/user`)
		return resp.data
	}
}

export default RESTApi