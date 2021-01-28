import React from 'react';
import './RegisterPage.css';
import './FormField/MyInputs.css'
import {$error, $stage, setError} from '../../../state_management'
import {useStore} from "effector-react";

import FirstRegisterStage from "./FirstRegisterStage";
import SecondRegisterStage from "./SecondRegisterStage";
import ThirdRegisterStage from "./ThirdRegisterStage";



const RegisterPage = () => {
    const stage = useStore($stage)
    const error = useStore($error)

    const render = (stage) => {
        switch(stage) {
            case 1 :
                return <FirstRegisterStage />
            case 2 :
                return  <SecondRegisterStage />
            case 3 :
                return <ThirdRegisterStage />
            default :
                return null
        }
    }

    const errorRegister = (error) => {
        let classes = 'register-error';
        let messages = ''

        if (error) {
            setTimeout(() => {
                setError(null)
            }, 5000)
            classes = `register-error opacity`
            messages = error.map(el => <p key = {el.msg}>{el.msg}</p>)

        }

        return (
            <div className={classes}>
                {messages}
            </div>
        )
    }


    return (
        <div className="auth_page">
            <div className="container container-auth">
                {errorRegister(error)}
                {render(stage)}
            </div>
        </div>
    );
}



export default RegisterPage;
