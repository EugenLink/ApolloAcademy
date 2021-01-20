import React from 'react';
import './TeacherTitle.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Space from '../../../img/solar-system.png'

const TeacherTitle = (props) => {
    return (
        <div className="teacher-title">
            <ScrollAnimation animateIn='flipInY' animateOnce={true} initiallyVisible={true}>
                <img src={Space} alt="#"/>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' delay={3} animateOnce={true} initiallyVisible={true}>
                <p className="teacher-title__p">Наш замечательный преподовательский состав состоит из {props.count} высоквалифицированных специалистов своего дела:</p>
            </ScrollAnimation>

        </div>
    );
};

export default TeacherTitle;
