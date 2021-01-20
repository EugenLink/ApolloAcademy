import React from 'react';
import './Location.css';
import { YMaps, Map} from 'react-yandex-maps';
import FB from '../../../img/fb.png';
import VK from '../../../img/vk.png';
import TG from '../../../img/tg.png';
import TW from '../../../img/tw.png';
import ARROW from '../../../img/arrow.png';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Scroll from 'react-scroll';



const Location = () => {

    var scroll = Scroll.animateScroll;

    function scrollToTop() {
        scroll.scrollToTop();
    };

    return (
        <div className="location-block">
            <div className="container">

                <YMaps>
                    <div className="map d-flex space-between">

                        <div className='location-contacts'>
                            <ScrollAnimation animateIn='fadeIn'>
                            <h1 className='location-title'>Контакты:</h1>
                            <ul className='location-adress'>
                                <li className='location-adress__item'>
                                    Адрес: 14444, г. Москва ул. Пушкина д. 228
                                </li>
                                <li className='location-adress__item'>
                                    Телефон: +7 (898) 098-90-81
                                </li>
                                <li className='location-adress__item'>
                                    Факс: +7 (898) 098-90-82
                                </li>
                                <li className='location-adress__item'>
                                    Email: sobaka@gmail.ru
                                </li>
                            </ul>
                            <div className='social-icons d-flex'>
                                <a href="vk.com"><img src={VK} alt="vk"/></a>
                                <a href="fb.com"><img src={FB} alt="fb"/></a>
                                <a href="tg.com"><img src={TG} alt="tg"/></a>
                                <a href="tw.com"><img src={TW} alt="tw"/></a>
                                <img className='anchor-block' src={ARROW} alt="#" onClick={scrollToTop}/>
                            </div>
                            </ScrollAnimation>
                        </div>


                        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} width={600} height={500}>
                        </Map>

                    </div>
                </YMaps>

            </div>
        </div>
    );
};

export default Location;
