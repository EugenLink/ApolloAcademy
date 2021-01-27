import React from 'react'
import './FormField.css'
import {Field} from "formik";
import ErrorField from "./ErrorField";

const InputFormField = ({disabled, type, holder, name, errors = {}, touched = {}}) => {

    const styled = errors[name] && touched[name] ? 'text-input error' : 'text-input'


    return (
        <div >
            <Field autoComplete = 'off' className={styled} name = {name} placeholder = {holder} type = {type} disabled={disabled} />
            <div className='clear_block'>
                {
                    errors[name] && touched[name] ? <ErrorField text = {errors[name]}/> : null
                }
            </div>

        </div>
    )
}

export default  InputFormField