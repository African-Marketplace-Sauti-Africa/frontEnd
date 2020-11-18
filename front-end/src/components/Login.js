import React, {useState, useEffect} from "react";
import Schema from '../Validation/Schema';
import { useHistory } from 'react-router-dom'
import '../styles/Login.css'
import { userLogin } from '../services/authentication'
import styled, { keyframes } from 'styled-components'

const kf = keyframes`
  100% {
    opacity: 1;
  }
`
const FormAnimation = styled.div`
    opacity: 0;
    animation: ${kf} 1s ease-in-out forwards;

`




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
        let update = true
        Schema.isValid(formData)
            .then(valid => {
                if(update){
                    setBtnDisable(!valid)
                }
            })
        return (()=>{ update = false})
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
        <FormAnimation className='loginForm'>
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
        </FormAnimation>
    </div>
    )
}