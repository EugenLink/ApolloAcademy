import React from 'react';
import './achivments.css';
import AchivmentItem from "./AhivmentItem/AchivmentItem";

const data = [
    {
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://tv.ua/i/10/08/80/4/1008804/image_main/71fa10a2aa0de727f30300418a610c63-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg'
    },
    {
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://tv.ua/i/10/08/80/4/1008804/image_main/71fa10a2aa0de727f30300418a610c63-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg'
    },
    {
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://tv.ua/i/10/08/80/4/1008804/image_main/71fa10a2aa0de727f30300418a610c63-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg'
    },
    {
        title: 'The standard Lorem Ipsum passage, used since the 1500s',
        text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image: 'https://tv.ua/i/10/08/80/4/1008804/image_main/71fa10a2aa0de727f30300418a610c63-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg'
    }
            ]

const Achivments = () => {
    return (
            <div className="container">
                <div className="achivments">
                    <h2 className="achivments-title">Нам уже 50 лет!</h2>
                    <p className='achivments__text'>за это время мы успели:</p>
                    <div className="achivments-list">
                        {data.map((el, current) => {
                            if (current === 0 || current % 2 === 0) {
                                var orderName =  '';
                                var animateType = 'bounceInRight';
                            } else {
                                 orderName = 'row-reverse'
                                 animateType = 'bounceInLeft';
                            }
                            if (el.image && el.text && el.title) {
                                return <AchivmentItem key = {el.title} id={current} animate = {animateType} order = {orderName} title = {el.title} img = {el.image} text = {el.text}/>
                            } else {
                                return null
                            }
                        })}
                    </div>
                </div>
            </div>
    );
};

export default Achivments;
