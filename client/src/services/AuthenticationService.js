import Api from '@/services/Api'

export default{
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//     email: "931384141@qq.com",
//     password: "123456"
// })
