import React from 'react';
import './TeacherItem.css';


const TeacherItem = (props) => {
    return (
        <div className="teacher-item">
            <img src={props.image} alt="#"/>
            <div className="teacher-item__title">
                <p className="teacher-item__name">{props.name}</p>
                <p className="teacher-title__position">{props.position}</p>
            </div>
        </div>
    );
};

export default TeacherItem;
