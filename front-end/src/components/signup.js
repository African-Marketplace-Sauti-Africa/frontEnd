import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import * as yup from 'yup';
import {userRegisterAndLogin} from '../services/authentication';
import defaultSchema from '../Validation/signupSchema';

const GlobalStyle = createGlobalStyle`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@700&display=swap');
* {
    box-sizing:border-box;
}
html {
    height:100%;

}
body {
    font-family: 'Open Sans Condensed', sans-serif;
    background: rgba(29, 36, 42, 0.9);
    display:flex;
    align-items:center;
}

input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    border-style: none;
    background-color: white;
    margin-left: 0%;
    color:rgba(29, 36, 42, 0.9);
}

fieldset{
    border:.5px solid rgba(29, 36, 42, 0.9);
    border-radius: 3px;
    width: 140%;
    margin-left: -20%;
    margin-bottom: 5%;
}
`

const kf = keyframes`
    100%{
        opacity: 1;
    }
`

const StyledForm = styled.form`
    box-shadow:0px 0px 20px 0px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    border-radius: 7px;
    width: 450px;
    height: 450px;
    opacity: 0;
    color:rgba(29, 36, 42, 0.9);
    animation: ${kf} 1s ease-in-out forwards;
    margin-top:10%;
`

const Title = styled.div`
    display: block;
    border-bottom: 1px solid  rgb(62, 62, 65);
    width: 90%;
    margin-top: -2%;
    color: rgb(62, 62, 65);
    margin-bottom:5%;
`

const InputInfo = styled.div`
    display: block;
    box-sizing: border-box;
    width: 50%;
    outline: none;
    border-style: none;
    background-color:white;
    margin-left: -4.5%;
`

const StyledButton = styled.button`
    display:block;
    background-color:#f7797d;
    color:#fff;
    font-size:.9rem;
    border:0;
    border-radius:5px;
    height:40px;
    padding: 0 20px;
    cursor:pointer;
    box-sizing:border-box;
    margin-top:2%;
`
const StyledError = styled.div`
    color:red;
    font-weight:800;

`

const initialFormValues = {
    username: '',
    password: '',
  };
  
const initialFormErrors = {
    username: '',
    password: '',
  };


const initialDisabled = true;

function SignUp() {

    const { push } = useHistory()
    // const { inputChange, checkboxChange } = props;

    const [newForm, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState('')
    const [disabled, setDisabled] = useState(initialDisabled)
    // const [displayUser, setUser] = useState([])
    

    const validationCheck = (name, value) => {
        yup
        .reach(defaultSchema, name)
        .validate(value)
        .then(() => setErrors({...errors, [name]: ''})
    )
        .catch(err => 
            setErrors({...errors, [name]: err.errors[0]})

        );
    
    }

    useEffect(() => {
        let update = true
        defaultSchema.isValid(newForm).then((valid) => {
           if(update) {
            setDisabled(!valid)
           } 
        })
        return (() =>{update = false})
    }, [newForm]);

    const inputChange = (name, value) => {
        setForm({
            ...newForm, [name]:value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        const testSignUp = {
            username: newForm.username,
            password: newForm.password,
            department: 'seller'
        }

       const res = await userRegisterAndLogin(testSignUp)
        if(res === 'User Login Failed'){
            push('/login')
        } else if(res === 'User Register Failed'){
            console.log('Registration Failed, Try again');
        } else{
            push('/UserInventory/:id')
        }

    }

    const onChange = (e) => {
        const {name, value} = e.target
        inputChange(name, value)
        validationCheck(name, value)
        e.preventDefault()
        setForm({
            ...newForm,
            [e.target.name]: e.target.value
        })
       
    }

  
    return(
        <>
        <GlobalStyle/>
             <StyledForm onSubmit={onSubmit}>
             <Title><h2>Join African Marketplace</h2></Title>
                <StyledError>{errors.username}</StyledError>
                 <InputInfo>
                     <fieldset>
                         <legend>Username</legend>
                            <input
                            value={newForm.value}
                            onChange={onChange}
                            name='username'
                            type='text'/>
                     </fieldset>
                </InputInfo>
                <StyledError>{errors.password}</StyledError>
                <InputInfo>
                    <fieldset>
                         <legend>Password</legend>
                            <input
                            value={newForm.value}
                            onChange={onChange}
                            name='password'
                            type='password'/>
                     </fieldset>
                </InputInfo>
                <StyledButton disabled={disabled}>Submit</StyledButton>
                </StyledForm>

        </>
    );

};

export default SignUp;