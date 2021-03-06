import React from 'react'
import {Form} from "formik";
import './FormPanel.css'
import {useStore} from "effector-react";
import {$loading} from "../../../state_management";
import Loader from "../../Loader/Loader";



const FormPanel = (props)  => {
    const loading = useStore($loading)

    return (
        <div className='form-panel'>
            {loading ? <Loader /> : null}
                <Form>
                    {props.children}
                </Form>
        </div>

    )
}

export default  FormPanel