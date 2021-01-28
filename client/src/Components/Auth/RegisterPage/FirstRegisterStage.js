import React from 'react';
import {Formik} from "formik";
import InputFormField from "./FormField/InputFormField";
import {SignupSchema1} from "../ValidationSchemas/SignUpSchema";
import {changeStage, changeRegisterValue} from "../../../state_management";

import FormPanel from "../FormPanel/FormPanel";


const FirstRegisterStage = () => {

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            age: ''
        }} onSubmit={(values) => {
            changeRegisterValue(values)
            changeStage(2)
        }}
        validationSchema={SignupSchema1}>
            {({errors, touched}) => {
                return (
                    <FormPanel>
                        <InputFormField name='firstName' type='text' holder='Имя' errors = {errors} touched = {touched}/>
                        <InputFormField name='lastName' type='text' holder='Фамилия' errors = {errors} touched = {touched}/>
                        <InputFormField name='age' type='text' holder='Возраст' errors = {errors} touched = {touched}/>
                        <button type='submit'>Далее</button>
                    </FormPanel>
                )
            }}

        </Formik>
    )
}

export default FirstRegisterStage