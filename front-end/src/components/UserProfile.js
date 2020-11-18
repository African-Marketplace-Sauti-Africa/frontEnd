import React, { useState, useEffect } from 'react'
import { userById } from '../services/users'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

/* --------- This page is fictional --------- .put and .delete endpoints don't exist as of 11/17/2020 */

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState()
  const [editing, setEditing] = useState(false)
  const { push } = useHistory()

  const editUserInfo = (user) =>{
    setEditing(true)
    setUserInfo(user) //pass in new user info from .put() that doesn't currently exist in Back-End
  }

 const saveUpdatedUser = e =>{
    e.preventDefault()
    .axiosWithAuth()
      .put()
      .then(res => {
        const newInfo = res.data
        setUserInfo(() => {
          if(user.id === newInfo.id){
            return newInfo
          } return user
        })
      })
      .catch(err => {
        console.log('Update User Info Failed', err);
      })
  }

  const deleteUser = (user) => {
    axiosWithAuth()
      .delete(`/users/${user.id}`)
      .then(res => {
        console.log('Delete User successful', res)
        push('/home')
      })
      .catch(err => {
        console.log('Delete User Failed', err);
      })
  }

  useEffect(() => {
    userById()
      .then(res => {
        console.log('UserProfile userById Response', res)
        setUserInfo(res.data)
      })
      .catch(err => {
        console.log('UserProfile userById Error', err)
      })
  }, [])

  return(
    <div>
      <h1>
        Hello User
      </h1>
      <button onClick={() => editUserInfo(user)} >Edit Profile</button>
      <button onClick={e => {
        e.stopPropagation()
        deleteUser(user)
      }}>Delete Profile</button>
      {editing && (
        <form onSubmit={saveUpdatedUser}>
          <label>
            Username:
            <input 
              onChange={e => {
                setUserInfo({ ...userInfo, username:e.target.value})
              }}
              value={userInfo.username}
            />
          </label>
          <label>
            Password:
            <input 
              onChange={e => {
                setUserInfo({ ...userInfo, password:e.target.value})
              }}
              value={userInfo.password}
            />
          </label>
          <button type="submit">Save Changes</button>
          <button onClick={() => setEditing(false)}>Cancel Editing</button>
        </form>
      )}

    </div>
  )
}



// const onSubmit = async evt => {
//   evt.preventDefault();
//   const login = await userLogin(formData)
//   if(login){
//       setFormData(initialFormData);
//       push('/UserInventory')
      
//   }
// }