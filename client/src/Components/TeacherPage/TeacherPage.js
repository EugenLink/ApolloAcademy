import React from 'react';
import './TeacherPage.css';
import TeacherTitle from "./TeacherTitle/TeacherTitle";
import TeacherItem from "./TeacherItem/TeacherItem";
import MiniFooter from "../MiniFooter/MiniFooter";

const teachers = [
]

const TeacherPage = () => {
    const items = teachers.map((el, counter) => {
        const {name, image, position} = el;

            if (name && image && position) {
                return <TeacherItem id={counter} name={name} image={image} position={position} />
            } else {
                return <p>Error</p>
            }
        });

    return (
        <div className="tp-background">
            <div className="container">
                <TeacherTitle count = {teachers.length}/>
                <div className='teacher-list d-flex'>
                    {items}
                </div>
            </div>
            <MiniFooter />
        </div>

    );
};

export default TeacherPage;
