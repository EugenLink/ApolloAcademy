import React, {useEffect} from 'react';
import {Formik} from "formik";
import InputFormField from "./FormField/InputFormField";
import {SignupSchema3} from "../ValidationSchemas/SignUpSchema";
import FormPanel from "../FormPanel/FormPanel";
import {
    $registerValues,
    changeRegisterValue,
    changeStage, setError
} from "../../../state_management";
import {useStore} from "effector-react";
import {useHttp} from '../../../hooks/useHttp'


const SecondRegisterStage = () => {
    const registerValues = useStore($registerValues)

    const {request} = useHttp();

    useEffect(() => {
        if (registerValues.email) {
            const result = request('/api/auth/register', 'POST', registerValues)
            result
                .then(res => {
                    if (res.status === 200) {

                    } else {

                    }
                })
                .catch(e => {return e})
        }
    }, [registerValues])


    return (
        <Formik initialValues={{
            email: '',
            password: ''
        }} onSubmit={(values) => {
            changeRegisterValue(values)
            changeStage(1)
        }}
                validationSchema={SignupSchema3}>
            {({errors, touched}) => {
                return (
                    <FormPanel>
                        <InputFormField name='email' type='text' holder='Е-mail' errors = {errors} touched = {touched}/>
                        <InputFormField name='password' type='password' holder='Пароль' errors = {errors} touched = {touched}/>
                        <button type='submit'>Далее</button>
                    </FormPanel>
                )
            }}

        </Formik>
    )
}

export default SecondRegisterStage