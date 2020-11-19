import { axiosWithAuth } from '../utils/axiosWithAuth'

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


export const deleteUser = id => {
  return new Promise(resolve => {
    axiosWithAuth()
    .delete(`/users/${id}`)
    .then(res => {
      console.log('Delete User successful', res)
      resolve(res)
    })
    .catch(err => {
      console.log('Delete User Failed', err);
      resolve()
    })
  })
}


export const updateUserInfo = (id,formData) => {
  return new Promise(resolve => {
    axiosWithAuth()
    .put(`/users/${id}`,formData)
    .then(res => {
      console.log('Update User Profile Success', res);
      resolve(res)
    })
    .catch(err => {
      console.log('Update User Profile Failed', err);
      resolve()
    })
  })
}