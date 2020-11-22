import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


const EditItem = (props) => {
    const {item} = props
    const [editForm, setEditForm] = useState({
        name: '',
        price: 0,
        description: '',
        location: ''
    })

        const onChange = (e) => {
            setEditForm({
                ...editForm,
                [e.target.name]: e.target.value
            })
        }

        const onSubmit = (e) => {
            axiosWithAuth()
            .put(`/items/${item.id}`, editForm)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
   

    return (
        <div>
                <form onSubmit={onSubmit}>
                    <label>
                        Item Name:
                        <input 
                        type='text'
                        name='name'
                        placeholder='Enter Item Name'
                        value={editForm.name}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Price:
                        <input 
                        type='number'
                        name='price'
                        placeholder='Enter a numerical value'
                        value={editForm.price}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input 
                        type='text'
                        name='description'
                        placeholder='Describe your item'
                        value={editForm.description}
                        onChange={onChange}
                        />
                    </label>
                    <label>
                        Location:
                        <input 
                        type='text'
                        name='location'
                        placeholder='Enter Country'
                        value={editForm.location}
                        onChange={onChange}
                        />
                    </label>
                    <button>Edit Item</button>
                </form>
        </div>
    )
}

export default EditItem

 