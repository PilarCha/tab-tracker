import Api from '@/services/Api'

export default{
  register (credentials) {
    console.log('we sent to the post!')
    return Api().post('register', credentials)
  },
  login (credentials) {
    console.log('hit the login')
    return Api().post('login', credentials)
  },
  create (credentials) {
    console.log('HIT THE create method')
    return Api().post('create', credentials)
  }
}
