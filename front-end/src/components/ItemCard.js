import React from 'react'
import '../styles/ItemCard.css'
import {axiosWithAuth} from '../utils/axiosWithAuth'

const ItemCard = (props) => {
    const {item} = props

    const onEdit = (e) => {
        axiosWithAuth()
        .put('https://african-marketplace-back-end.herokuapp.com/items/:id')
    }

    const onDelete = (e) => {

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
            
        </>
    )
}

export default ItemCard
