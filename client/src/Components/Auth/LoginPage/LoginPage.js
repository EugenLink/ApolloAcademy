import React from 'react'
import SignInSchema from "../ValidationSchemas/SignUpSchema";
import {Form, Formik} from "formik";
import AuthInput from "../AuthInput/AuthInput";


const LoginPage = () => {
    return (
        <div className="auth_page">
            <div className="container container-auth">
                <Formik99
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={SignInSchema}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}>
                    {({ errors, touched, values}) => (
                        <Form className='d-flex form-register align-items-center'>
                            <h2 className="register-title">Вход</h2>
                            <AuthInput name="email" type="email" errors = {errors} touched = {touched} holder="E-mail"/>
                            <AuthInput name="password" type="password" errors = {errors} touched = {touched} holder="Пароль"/>
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik99>
            </div>
        </div>
    )
}

export default LoginPage