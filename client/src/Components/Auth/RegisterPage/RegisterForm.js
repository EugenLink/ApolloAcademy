import React from 'react';
import {Formik} from "formik";
import InputFormField from "./FormField/InputFormField";
import FormPanel from "../FormPanel/FormPanel";
import {SignupSchema} from "../ValidationSchemas/SignUpSchema";
import CircleLogo from '../../../img/circle_logo.png'

const RegisterForm = () => {

    return (
        <Formik initialValues={{

        }} onSubmit={(values) => {

        }}
        validationSchema={SignupSchema}>
            {({errors, touched}) => {
                return (
                    <FormPanel>
                        <img className='logo_circle' src={CircleLogo} />
                        <h2 className='register_title'>Регистрация</h2>
                        <InputFormField name='firstName' type='text' label='Имя' holder='Введите имя' errors = {errors} touched = {touched}/>
                        <InputFormField name='firstName' type='text' label='Имя' holder='Введите имя' errors = {errors} touched = {touched}/>
                        <InputFormField name='firstName' type='text' label='Имя' holder='Введите имя' errors = {errors} touched = {touched}/>

                    </FormPanel>
                )
            }}

        </Formik>
    )
}

export default RegisterForm