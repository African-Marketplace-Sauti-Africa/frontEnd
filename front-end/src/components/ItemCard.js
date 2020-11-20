import React from 'react'
import '../styles/ItemCard.css'

const ItemCard = (props) => {
    const {item} = props
    return (
            <div className='itemCard'>
                            <h3>{item.name}</h3>
                         <p>{item.description}</p>
                    <h5>{item.location}</h5>
                    <h5>{`$${item.price}`}</h5>
            </div>
    )
}

export default ItemCard
