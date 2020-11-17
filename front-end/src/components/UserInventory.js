import React from 'react'
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const UserInventory = () => {
 
        axiosWithAuth()
        .get('https://african-marketplace-back-end.herokuapp.com/items')
        .then((res) => {
            console.log('RES: ', res.data)
        })
        .catch((err) => {
            console.log('ERROR: ' ,err)
        })

    return (
        <div>
            <p>PRIVATE PAGE</p>
        </div>
    )
}

export default UserInventory




