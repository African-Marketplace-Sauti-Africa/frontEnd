import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { userById, deleteUser } from '../services/users'
import { LoginContext } from '../App'
import '../styles/UserProfile.module.css'

/* --------- This page has fictional editing --------- */
/* .put endpoint does not exist as of 11/17/2020 */

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState()
  const [editing, setEditing] = useState(false)
  const { push } = useHistory()
  const loginInfo = useContext(LoginContext)
  const name = loginInfo.username.charAt(0).toUpperCase() + loginInfo.username.slice(1)
  const id = loginInfo.subject
  

  // const editUserInfo = (user) =>{
  //   setEditing(true)
  //   setUserInfo(user) //pass in new user info from .put() that doesn't currently exist in Back-End
  // }

//  const saveUpdatedUser = async e =>{
//     e.preventDefault()
//     const update = await updateUserInfo(id,formData)
//     if(update){
//       setUserInfo(fromData)
//     } 
//   }

const deleteConfirm = async id => {
  const deleting = await deleteUser(id)
  if(deleting){
    push('/home') 
  }
}

  // This get request is unnecessary as I already have the data from loginContext.
  // Using anyway for CRUD MVP
  useEffect(() => {
    userById(id)
      .then(res => {
        setUserInfo(res.data)
      })
      .catch(err => {
        console.log('UserProfile userById Error', err)
      })
  }, [])


  return(
    <div className='userProfile'>
      <h1 className='userName'>
        Hello {name}!
      </h1>
      <div className='editInfo'>
        <h2>Editing your profile is not currently possible</h2>
        <h3>Coming soon...</h3>
        <ul className='editingSoon'>
          <li>Edit Username</li>
          <li>Edit Password</li>
          <li>Upload Profile Picture</li>
        </ul>
        <h3>However, you can delete your profile...at your own risk.</h3>
      </div>
      {/* <button onClick={() => editUserInfo(user)} >Edit Profile</button> */}
      <div className='danger'>
        <h2 className='dangerZone'>Danger Zone!</h2>
        <p className='text-warning'>Deleting your entire profile is permanent!</p>
        <button className='dangerBtn' onClick={e => {
          e.stopPropagation()
          deleteConfirm(id)
        }}>Delete Profile</button>
      </div>
      {/* {editing && (
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
      )} */}

    </div>
  )
}

export default UserProfile