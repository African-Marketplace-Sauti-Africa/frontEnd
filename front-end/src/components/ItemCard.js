import React, {useState} from 'react'
import '../styles/ItemCard.css'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import EditItem from './EditItem'

const ItemCard = (props) => {
    const {item} = props
    const [editForm, setEditForm] = useState(false)
    
    const onEdit = (e) => {
        setEditForm(!editForm)
    }

    const onDelete = (e) => {
        axiosWithAuth()
        .delete(`/items/${item.id}`)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <div className='itemCard'>
                            <h3>{item.name}</h3>
                         <p>{item.description}</p>
                    <h5>{item.location}</h5>
                    <h5>{`$${item.price}`}</h5>
            <button className='editBtn' onClick={onEdit}>Edit Item</button>
            <button className='dltBtn' onClick={onDelete}>Delete Item</button>
            </div>
            {editForm && <EditItem item={item}/> }
            
        </>
    )
}

export default ItemCard
