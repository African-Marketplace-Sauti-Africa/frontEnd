import axiosWithAuth from '../utils/axiosWithAuth'

// April - Pass in id
export const userById = id => {
  return new Promise(resolve => {
    axiosWithAuth()
    .get(`/user/${id}`)
    .then(res => {
      console.log('userById res:',res);
      
      resolve(res)
      
    })
    .catch(err => {
      console.log('userById Error',err);
      resolve()
    })
  })
}