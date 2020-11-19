import React, { useState, useEffect } from 'react'
import { userById, deleteUser } from '../services/users'
import { useHistory, useParams } from 'react-router-dom'

/* --------- This page has fictional editing --------- */
/* .put endpoint does not exist as of 11/17/2020 */

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState()
  const [editing, setEditing] = useState(false)
  const { push } = useHistory()
  //const params = useParams();
 //const { id } = useParams();

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

// const deleteConfirm = async id => {
//   const deleting = await deleteUser(id)
//   if(deleting){
//     push('/home') 
//   }
// }

  // useEffect((id) => {
  //   userById(id)
  //     .then(res => {
  //       console.log('UserProfile userById Response', res)
  //       setUserInfo(res.data)
  //     })
  //     .catch(err => {
  //       console.log('UserProfile userById Error', err)
  //     })
  // }, [])

  return(
    <div>
      <h1>
        Hello User
      </h1>
      {/* <button onClick={() => editUserInfo(user)} >Edit Profile</button> */}
      {/* <div>
        <h2>Danger Zone!</h2>
        <p>Deleting your entire profile is permanent!</p>
        <button onClick={e => {
          e.stopPropagation()
          deleteConfirm(id)
        }}>Delete Profile</button>
      </div> */}
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