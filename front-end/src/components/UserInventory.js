import React, {useState, useEffect, useContext} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';
import { LoginContext } from '../App'
import ItemCard from './ItemCard'
import '../styles/UserInventory.css'

const UserInventory = () => {
 const [userItems, setUserItems] = useState([])
 const [additem, setAddItem] = useState(false)
 const [newItemValues, setNewItemValues] = useState({
     name: '',
     price: 0,
     description: '',
     location: ''
 })
    
  const loginInfo = useContext(LoginContext)
  const name = loginInfo.username.charAt(0).toUpperCase() + loginInfo.username.slice(1)
    const id = loginInfo.subject
    console.log('Logged in ',loginInfo)



    useEffect(()=>{
        axiosWithAuth()
        .get(`https://african-marketplace-back-end.herokuapp.com/users/${id}/items`)
        .then((res) => {
            console.log('RES: ', res.data.items)
            setUserItems(res.data.items)
        })
        .catch((err) => {
            console.log('ERROR: ' ,err)
        })
    },[])

    const onChange = (e) => {
        setNewItemValues({
            ...newItemValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post(`https://african-marketplace-back-end.herokuapp.com/items/additem`, newItemValues)
        .then((res) => {
            console.log(res)
            setUserItems(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='UserInventory'>
            <Link to='/profile' >Profile</Link>
            <h1>{`Hello ${name}, here are your Items`}</h1>
            <div className='cardContainer'>
            {
                userItems.map((item, key) => {
                    return <ItemCard item={item} key={key} />
                })
            }
            </div>
            <button onClick={()=> setAddItem(!additem) }>{additem ? 'Cancel' : 'List a new item'}</button>
            {additem && 
            <div className='formContainer'>
                <form onSubmit={onSubmit} className='addItemForm'>
                    <label className='itemFormLabel'>
                        Item Name:
                        <input 
                        className='itemFormInput'
                        type='text'
                        name='name'
                        placeholder='Enter Item Name'
                        value={newItemValues.name}
                        onChange={onChange}
                        />
                    </label>
                    <label className='itemFormLabel'>
                        Price:
                        <input 
                        className='itemFormInput'
                        type='number'
                        name='price'
                        placeholder='Enter a numerical value'
                        value={newItemValues.price}
                        onChange={onChange}
                        />
                    </label>
                    <label className='itemFormLabel'>
                        Description:
                        <input 
                        className='itemFormInput'
                        type='text'
                        name='description'
                        placeholder='Describe your item'
                        value={newItemValues.description}
                        onChange={onChange}
                        />
                    </label>
                    <label className='itemFormLabel'>
                        Location:
                        <input 
                        className='itemFormInput'
                        type='text'
                        name='location'
                        placeholder='Enter Country'
                        value={newItemValues.location}
                        onChange={onChange}
                        />
                    </label>
                    <button className='addBtn'>Add Item</button>
                </form>
            </div>
            }
            
        </div>
    )
}

export default UserInventory




