import React, {useState} from "react";


const initialFormData = ([])

export default function Login() {

    const [formData, setFormData] = useState(initialFormData)

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]:value
        })
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
    }


    return(
        <div onSubmit={onSubmit}>
            <h1>Login</h1>
            <form>
                <label>
                    Username: <input  onChange={handleInputChange} value={formData.username} type='text' name='username'/>
                </label>
                <label>
                    Password: <input type='password' name='password'/>
                </label>
                <button id='loginBtn'>Login</button>
            </form>
        </div>
    )
}