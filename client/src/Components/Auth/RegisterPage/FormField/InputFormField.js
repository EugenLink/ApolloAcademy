import React from 'react'
import './FormField.css'
import {Field} from "formik";



const InputFormField = ({label, disabled, type, holder, name, errors = {}, touched = {}}) => {



    const styled = errors[name] && touched[name] ? 'text-input error' : 'text-input'


    return (
        <div className='field_input'>
            <label htmlFor={name} className='label_input'>{label}</label>
            <Field autoComplete = 'off' className={styled} name = {name} placeholder = {holder} type = {type} disabled={disabled} />
        </div>
    )
}

export default  InputFormField