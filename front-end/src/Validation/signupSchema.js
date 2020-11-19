import * as yup from 'yup';
  
  const defaultSchema = yup.object().shape({
    username: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Please set your password'),
    termsOfService: yup
        .boolean()
        .oneOf([true], "To continue, you must accept Terms of Service"),
});

export default defaultSchema;