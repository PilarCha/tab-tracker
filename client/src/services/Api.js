import axios from 'axios'

export default () => {
  console.log('hitting the base URL')
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
