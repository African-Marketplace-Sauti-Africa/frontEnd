import * as yup from 'yup';

export default yup.object().shape({

    username: yup.string()
        .required('Valid Username Required'),
    password: yup.string()
        .required('Please Enter A Valid Password')



})