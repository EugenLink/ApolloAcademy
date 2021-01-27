import React from 'react';
import {Formik, Field} from "formik";
import InputFormField from "./FormField/InputFormField";
import {SignupSchema1} from "../ValidationSchemas/SignUpSchema";
import FormPanel from "./FormPanel/FormPanel";
import {$stage, changeStage} from "../../../state_management";
import {useStore} from "effector-react";


const FirstRegisterStage = () => {
    const stage = useStore($stage)
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            age: ''
        }} onSubmit={(values) => {
            changeStage()
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