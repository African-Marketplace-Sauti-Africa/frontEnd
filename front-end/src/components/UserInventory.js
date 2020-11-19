import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {useParams, Link} from 'react-router-dom';

const UserInventory = () => {
 const [userItems, setUserItems] = useState([])
 const [additem, setAddItem] = useState(false)
 const [newItemValues, setNewItemValues] = useState({
     name: '',
     price: 0,
     description: '',
     location: ''
 })

const {id} = useParams()

    useEffect(()=>{
        axiosWithAuth()
        .get(`https://african-marketplace-back-end.herokuapp.com/users/108/items`)
        .then((res) => {
            console.log('RES: ', res.data)
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
        .post('https://african-marketplace-back-end.herokuapp.com/users/108/items', newItemValues)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <button onClick={()=> setAddItem(!additem) }>List a New Item</button>
            {additem && 
            <div>
                <form>
                    <label>
                        Item Name:
                        <input 
                        type='text'
                        name='name'
                        placeholder='Enter Item Name'
                        value={newItemValues.name}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input 
                        type='number'
                        name='price'
                        placeholder='Enter a numerical value'
                        value={newItemValues.price}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input 
                        type='text'
                        name='description'
                        placeholder='Describe your item'
                        value={newItemValues.description}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Location:
                        <input 
                        type='text'
                        name='location'
                        placeholder='Enter Country'
                        value={newItemValues.location}
                        onChange={onChange}
                        />
                    </label>
                    <button>List</button>
                </form>
            </div>
            }
            <Link to='/profile' >Profile</Link>
            <p>PRIVATE PAGE</p>
        </div>
    )
}

export default UserInventory




