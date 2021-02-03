import React from 'react';
import './About.css';
import ScrollAnimation from 'react-animate-on-scroll'

const About = () => {
    return (
        <div className="info-back">
            <div className="container">
                <div className="info-about">
                    <ScrollAnimation animateIn='fadeIn'>
                        <h1 className="info-about__title">Академия технологических наук APOLLO</h1>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInRight'>
                        <p className="info-about__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='bounceInLeft' >
                        <p className="info-about__welcom">Позаботьтесь о будущем ваших детей, и отправьте их в нашу академию!</p>
                        <div className="feedback-form d-flex">
                            <input className="input feedback-form__input" placeholder="Номер телефона" type="tel" pattern="+7[0-9]{10}"/>
                            <div className="button feedback-form__button">Оставить заявку
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default About;
