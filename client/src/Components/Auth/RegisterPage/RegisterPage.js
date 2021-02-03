import React from 'react';
import './RegisterPage.css';
import './FormField/MyInputs.css'
import {$error, $stage, clearRegisterValues, setError} from '../../../state_management'
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

        if (error) {
            setTimeout(() => {
                setError(null)
            }, 5000)

            if (typeof error === 'object') {
                return (
                    <div className={'register-error'}>
                        <p>{error}</p>
                    </div>
                )
            } else {
                return (
                    <div className={'register-error'}>
                        {error}
                    </div>
                )
            }



        }


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
