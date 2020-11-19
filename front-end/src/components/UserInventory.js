import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useParams} from 'react-router-dom';

const UserInventory = () => {
 
const {id} = useParams()

    useEffect(()=>{
        axiosWithAuth()
        .get('https://african-marketplace-back-end.herokuapp.com/users')
        .then((res) => {
            console.log('RES: ', res.data)
        })
        .catch((err) => {
            console.log('ERROR: ' ,err)
        })
    },[])

    // axiosWithAuth()
    // .get(`https://african-marketplace-back-end.herokuapp.com/users`)
    // .then((res)=>{
    //     debugger
    //     console.log('users item' ,res)
    // .catch((err)=>{
    //     debugger
    //     console.log('Error' ,err)
    // })

    return (
        <div>
            <p>PRIVATE PAGE</p>
        </div>
    )
}

export default UserInventory




