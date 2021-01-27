import React from 'react';
import './RegisterPage.css';
import './FormField/MyInputs.css'
import {$stage, changeStage} from '../../../state_management'
import {useStore} from "effector-react";

import FirstRegisterStage from "./FirstRegisterStage";
import SecondRegisterStage from "./SecondRegisterStage";



const RegisterPage = () => {
    const stage = useStore($stage)

    const render = (stage) => {
        switch(stage) {
            case 1 :
                return <FirstRegisterStage />
            case 2 :
                return  <SecondRegisterStage />
            default :
                return null
        }
    }

    return (
        <div className="auth_page">
            <div className="container container-auth">
                {render(stage)}
            </div>
        </div>
    );
}



export default RegisterPage;
