import React from 'react'
import './Popup.css'

const Popup = ({text}) => {
    const render = () => {
        return (
            <div className='b-popup'>
                <div className="b-popup-content d-flex">
                    <img src="https://img.icons8.com/fluent/48/000000/checkmark.png"/>
                    {text}
                </div>
            </div>
        )
    }
    return (
        render()
    )
}

export default Popup