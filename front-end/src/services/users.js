import axios from 'axios'


export const userLogin = loginUser => {
  return new Promise(resolve => {
    axios
    .post('/login', loginUser)
    .then(res => {
      console.log('Login Success',res);
      sessionStorage.setItem('token',res.data.payload)
      resolve(res.data.payload)
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
    sessionStorage.setItem('token',res.data.payload)
    return res.data.payload
  }catch(error){
    console.log('Login Error', error)
    return
  }
}


export const userRegister = registerUser => {
  return new Promise(resolve => {
    axios
    .post('/register', registerUser)
    .then(res => {
      console.log('Register Success', res);
      resolve(res.data.payload)
      
    })
    .catch(err => {
      console.log('Register Error', err);
      resolve()
    })
  })
}