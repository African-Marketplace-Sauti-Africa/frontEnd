import React, {useState, useEffect} from "react";
import Schema from '../Validation/Schema';
import { useHistory } from 'react-router-dom'
import '../styles/Login.css'
import { userLogin } from '../services/users'

const initialFormData = {
    username:'',
    password:'',
}

const initialBtnState = true

export default function Login() {

    const [formData, setFormData] = useState(initialFormData)
    const [btnDisable, setBtnDisable] = useState(initialBtnState)
    const { push } = useHistory()

    useEffect(() => {
        Schema.isValid(formData)
            .then(valid => 
                setBtnDisable(!valid)
            )
    },[formData])

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const onChange = evt => {
        const {name, value} = evt.target
        handleInputChange(name,value)
    }

    const onSubmit = async evt => {
        evt.preventDefault();
        const login = await userLogin(formData)
        if(login){
            setFormData(initialFormData);
            push('/UserInventory')
            
        }
    }


    return(
    <div className='form'>
        <div className='loginForm'>
            <h1 id='loginTitle'>Login</h1>
            <form onSubmit={onSubmit}>
                <div className='user'>
                    <fieldset>
                     <legend>Username: </legend>
                        <input  onChange={onChange} value={formData.username} type='text' name='username'/>
                    
                    </fieldset>
                </div>
                <div className='pass'>
                    <fieldset>
                     <legend> Password: </legend>
                        <input onChange={onChange} value={formData.password} type='password' name='password' />
                    </fieldset>
                </div>
                <button disabled={btnDisable} id='loginBtn'>Login</button>
            </form>
        </div>
    </div>
    )
}