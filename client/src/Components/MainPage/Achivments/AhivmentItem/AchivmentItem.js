import React from 'react';
import './AchivmentItem.css';
import Icon from '../../../../img/idea.png';
import ScrollAnimation from "react-animate-on-scroll";

const AchivmentItem = (props) => {
    return (
        <ScrollAnimation animateIn={props.animate}  animateOnce={true} duration={2}>
                    <div className={props.order + ' achivment-item d-flex space-between '}>
                        <div className='achivment-item__block'>
                            <p className='achivment-item__title'>{props.title}</p>
                            <p className='achivment-item__text'>{props.text}</p>
                        </div>
                        <div className='line'>
                            <div className='icon-back'>
                                <img src={Icon} alt="" className="line-icon"/>
                            </div>

                        </div>
                        <img src={props.img} alt="#" className="achivments-item__image"/>
                    </div>
        </ScrollAnimation>

    );
};

export default AchivmentItem;
