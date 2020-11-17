import React, {useState, useEffect} from "react";
import Schema from '../Validation/Schema';
import { useHistory } from 'react-router-dom'

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
        console.log(formData);
        const login = await userLogin(formData)
        if(login){
            setFormData(initialFormData);
            push('/protected')
        }

    }


    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        Username: <input  onChange={onChange} value={formData.username} type='text' name='username'/>
                    </label>
                </div>
                <div>
                    <label>
                        Password: <input onChange={onChange} value={formData.password} type='password' name='password' />
                    </label>
                </div>
                <button disabled={btnDisable} id='loginBtn'>Login</button>
            </form>
        </div>
    )
}