import axios from 'axios'

async function main(){
  const baseurl = 'http://localhost:3033/api'
  const resp = await axios.get(`${baseurl}/user`)
  const user = resp.data
  console.log('user', user)
  return user
}

main().catch(e => { throw e })
