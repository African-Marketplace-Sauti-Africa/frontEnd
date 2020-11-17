import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import axios from 'axios';


const StyledDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    flex-direction:column;
    border:1px
    width:40%;
    background-color:#21b2a6;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 4px;
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    padding: 32px;
    background-color: white;
    margin-bottom: 24px;
    padding:10%;
`

const SignUpButton = styled.button`
    color:white;
    background-color: #ed4933;
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

//   const initialUsers = [];
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
        <form onSubmit={onSubmit}>
            <StyledDiv>
                <div>
                    <label>Name:&nbsp;
                        <input
                        value={newForm.value}
                        onChange={inputChange}
                        name='name'
                        type='text'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Email:&nbsp;
                        <input
                        value={newForm.value}
                        onChange={inputChange}
                        name='email'
                        type='email'
                        />
                
                    </label>
                </div>

                <div>
                    <label>Password:&nbsp;
                        <input
                        
                        type='password'
                        name='password'
                        onChange={inputChange}
                        value={newForm.value}
                        />
                        </label>
                </div>

                <div>
                    <label>
                        <input
                        type='checkbox'
                        name='termsOfService'
                        onChange={checkboxChange}
                        checked={newForm.value}
                        />
                        I accept the Terms of Service&nbsp;
                        </label>
                </div>
            

                <SignUpButton>
                    <button onClick={onSubmit}>Submit</button>
                </SignUpButton>

            </StyledDiv>
        </form>
    
    );

};

export default SignUp;