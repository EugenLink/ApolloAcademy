import React from 'react'
import {Field} from 'formik'
import './AuthInput.css'

const AuthInput = ({name, type = 'text', holder, errors, touched}) => {
    const styles = errors[name] && touched[name] ? 'register-input error' : 'register-input';


    return (
        <div className="input_block">
            <Field name={name} placeholder={holder} className={styles} type={type}/>
        </div>
    )
}

export default  AuthInput
