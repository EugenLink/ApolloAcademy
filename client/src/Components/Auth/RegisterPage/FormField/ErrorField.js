import React from 'react'


const ErrorField = (props) => {
    return (
        <div className="form-error">
            {props.text}
        </div>
    )
}

export default ErrorField