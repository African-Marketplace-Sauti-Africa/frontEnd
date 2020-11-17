import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
    html {
        height:100%;

    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        background: rgba(29, 36, 42, 0.9);
    }
`

const SharedStyles = css`
    background-color:#eee;
    height:40px;
    border-radius:5px;
    border:1px solid #ddd;
    margin:10px 0 20px 0;
    padding:20px;
    box-sizing:border-box;
`

const StyledFormWrapper = styled.form`
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    padding:0 20px;
`

const StyledForm = styled.form`
    width:100%;
    max-width:700px;
    padding:40px;
    background-color:#fff;
    border-radius:10px;
    box-sizing:border-box;
    box-shadow:0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

const StyledInput = styled.input`
    display:block;
    width:100%;
    ${SharedStyles};
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
`

const StyledError = styled.div`

`

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    termsOfService: '',
  };
  
  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    termsOfService: '',
  };


  const initialDisabled = true;

function SignUp(props) {

    const { inputChange, checkboxChange } = props;

    const [newForm, setForm] = useState(initialFormValues)
    const [errors, setErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [displayUser, setUser] = useState([])
    
  let defaultSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    email: yup
        .string()
        .required('Email is required'),
    password: yup
        .string()
        .min(7, 'Password must be at least 7 characters')
        .required('Please set your password'),
    termsOfService: yup
        .boolean()
        .oneOf([true], "To continue, you must accept Terms of Service"),
});
    
    useEffect(() => {
        defaultSchema.validate(newForm)
        .then(valid => setDisabled(!valid))
    }, [newForm, defaultSchema])

    const validationCheck = (event) => {
        event.persist()
        yup.reach(defaultSchema, event.target.name)
        .validate(event.target.name)
        .then(valid => setErrors(
            {...setErrors, [event.target.name]: errors.errors}
        ))
        .catch(error => 
            setErrors(
                {...errors, [event.target.name]: errors.errors}
            ));
    }




    const onSubmit = (event) => {
        event.preventDefault()
        
        const testSignUp = {
            name: newForm.name,
            email: newForm.email,
            password: newForm.password,
            termsOfService: newForm.termsOfService,
        }
        
        axios.post('', testSignUp)
        .then(value => {
            const newSignUp = value.data
            setUser([newSignUp],...displayUser)
            setUser(value.data)
            setForm(initialFormValues)
        })


    }

    const onInputChange = (evt) => {
        const { name, value} = evt.target
        inputChange(name, value);
    };

    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked);
    }


  
    return(
        <>
        <GlobalStyle/>
        <StyledFormWrapper>
             <StyledForm onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                
                <label htmlFor='name'>Name</label>
                <StyledInput
                value={newForm.value}
                onChange={inputChange}
                name='name'
                type='text'
                />

                <label htmlFor='email'>Email</label>
                <StyledInput
                 value={newForm.value}
                 onChange={inputChange}
                 name='email'
                 type='email'
                />

                <label htmlFor='password'>Password</label>
                <StyledInput 
                type='password'
                name='password'
                onChange={inputChange}
                value={newForm.value}
                />

                <label htmlFor='termsOfService'>
                <StyledInput
                type='checkbox'
                name='termsOfService'
                onChange={checkboxChange}
                checked={newForm.value}
                />
                I accept the Terms of Service&nbsp;
                </label>

                <StyledError><p>Error message here</p></StyledError>
                <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>

        </StyledFormWrapper>
        </>
               

            
            
    );

};

export default SignUp;