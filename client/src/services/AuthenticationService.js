import Api from '@/services/Api'

export default{
  register (credentials) {
    console.log('we sent to the post!')
    return Api().post('register', credentials)
  }
}
