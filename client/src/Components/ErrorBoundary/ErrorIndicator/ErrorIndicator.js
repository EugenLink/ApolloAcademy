import React from 'react';
import Error from './error.png';
import './ErrorIndicator.css'

const ErrorIndicator = () => {
    return (
        <div className="container error-indicator">
            <img src={Error} alt="Error"/>
            <h2 className="error-indicator__title">Что-то пошло не так, попробуйте позже!!!</h2>
        </div>
    )
}

export default  ErrorIndicator
