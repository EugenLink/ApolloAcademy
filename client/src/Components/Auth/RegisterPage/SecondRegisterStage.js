import React from 'react';
import {Formik} from "formik";
import InputFormField from "./FormField/InputFormField";
import {SignupSchema2} from "../ValidationSchemas/SignUpSchema";
import FormPanel from "./FormPanel/FormPanel";
import { changeStage, $selectValue} from "../../../state_management";
import {useStore} from "effector-react";
import SelectInput from "./FormField/SelectInput";


const SecondRegisterStage = () => {
    const selectValue = useStore($selectValue)

    return (
        <Formik initialValues={{
            selected: 'student',
            secretKey: '',
            showRole: false,
            role: ''
        }} onSubmit={(values, actions) => {

            changeStage()
        }}
                validationSchema={SignupSchema2}>
            {({ errors, touched}) => {
                return (
                    <FormPanel>
                        <SelectInput values={[{holder: 'Студент', name: 'student'}, {holder: 'Преподаватель', name: 'teacher'}]} name='selected'/>
                        <InputFormField disabled={selectValue === 'student'} name='role' type='text' holder='Должность' errors = {errors} touched = {touched}/>
                        <InputFormField name='secretKey' type='text' holder='Серкетный ключ' errors = {errors} touched = {touched}/>
                        <button type='submit'>Далее</button>
                    </FormPanel>
                )
            }}

        </Formik>
    )
}

export default SecondRegisterStage