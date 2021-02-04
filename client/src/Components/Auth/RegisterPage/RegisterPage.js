import React from 'react';
import './RegisterPage.css';
import './FormField/MyInputs.css'
import RegisterForm from "./RegisterForm";


const RegisterPage = () => {
    return (
        <div className="auth_page">
            <div className="container container-auth">

                <RegisterForm />
            </div>
        </div>
    );
}



export default RegisterPage;
