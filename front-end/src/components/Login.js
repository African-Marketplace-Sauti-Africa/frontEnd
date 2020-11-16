import React, {useState, useEffect} from "react";
import Schema from '../Validation/Schema';


const initialFormData = {
    username:'',
    password:'',
}

const initialBtnState = true

export default function Login() {

    const [formData, setFormData] = useState(initialFormData)
    const [btnDisable, setBtnDisable] = useState(initialBtnState)

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

    const onSubmit = (evt) => {
        evt.preventDefault()
    }


    return(
        <div onSubmit={onSubmit}>
            <h1>Login</h1>
            <form>
                <label>
                    Username: <input  onChange={onChange} value={formData.username} type='text' name='username'/>
                </label>
                <label>
                    Password: <input onChange={onChange} value={formData.password} type='password' name='password' />
                </label>
            </form>
                <button disable={btnDisable} id='loginBtn'>Login</button>
        </div>
    )
}