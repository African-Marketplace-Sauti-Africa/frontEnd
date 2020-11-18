import {axiosWithAuth} from '../utils/axiosWithAuth';


export const userLogin = loginUser => {
  return new Promise(resolve => {
    axiosWithAuth()
    .post('/auth/login', loginUser)
    .then(res => {
      sessionStorage.setItem('token',res.data.token)
      resolve(res.data.token)
      
    })
    .catch(err => {
      console.log('Login Error',err);
      resolve()
    })
  })
}

const otherWay = async loginUser => {
  try{
    const res = await axiosWithAuth().post('/login', loginUser)
    sessionStorage.setItem('token',res.data.token)
    return res.data.token
  }catch(error){
    console.log('Login Error', error)
    return
  }
}


export const userRegister = registerUser => {
  return new Promise(resolve => {
    axiosWithAuth()
    .post('/auth/register', registerUser)
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      console.log('Register Error', err);
      resolve()
    })
  })
}


export const userRegisterAndLogin = registerUser => {
  return new Promise(resolve => {
    userRegister(registerUser)
      .then(res => {
        if(res){
          userLogin({username:registerUser.username,password:registerUser.password})
          .then(loginRes => {
            resolve(loginRes)
          })
          .catch(err =>{
            resolve('User Login Failed')
          })
        }
      })
      .catch(err => {
        resolve('User Register Failed')
      })
  })
}