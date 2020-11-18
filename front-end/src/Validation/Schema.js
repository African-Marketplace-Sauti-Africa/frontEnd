import * as yup from 'yup';

const Schema= yup.object().shape({

    username: yup.string()
        .required('Valid Username Required'),
    password: yup.string()
        .required('Please Enter A Valid Password')
        .min(8, 'Must Be Atleast 8 Characters')



})

export default Schema;