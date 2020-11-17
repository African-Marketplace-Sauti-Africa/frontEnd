import axios from 'axios'
import {axiosWithAuth} from '../utils/axiosWithAuth';


export const userLogin = loginUser => {
  return new Promise(resolve => {
    axiosWithAuth()
    .post('/auth/login', loginUser)
    .then(res => {
      sessionStorage.setItem('token',res.data.token)
      console.log('TOKEN: ', sessionStorage.getItem('token'))
      
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
    const res = await axios.post('/login', loginUser)
    sessionStorage.setItem('token',res.data.token)
    return res.data.token
  }catch(error){
    console.log('Login Error', error)
    return
  }
}


export const userRegister = registerUser => {
  console.log('userRegister INVOKED')
  return new Promise(resolve => {
    axiosWithAuth()
    .post('/auth/register', registerUser)
    .then(res => {
      console.log('Register Success', res);
      resolve(res.data.token)
      
    })
    .catch(err => {
      console.log('Register Error', err);
      resolve()
    })
  })
}