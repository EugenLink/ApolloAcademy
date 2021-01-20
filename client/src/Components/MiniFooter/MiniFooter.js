import React from 'react';
import './MiniFooter.css';
import FB from '../../img/fb.png';
import VK from '../../img/vk.png';
import TG from '../../img/tg.png';
import TW from '../../img/tw.png';


const MiniFooter = () => {
    return (
        <div className="footer-bg ">
            <div className="footer-info container pd-13 align-items-center d-flex space-between">
                <ul className="footer-info-list d-flex">
                    <li className="footer-info-item">© 2021 Apollo, Inc.</li>
                    <li className="footer-info-item">+7 (898) 098-90-81</li>
                    <li className="footer-info-item">г. Москва ул. Пушкина д. 228</li>
                </ul>
                <ul className="footer-info-list d-flex">
                    <li className="footer-info-social"><img src={FB} alt=""/></li>
                    <li className="footer-info-social"><img src={VK} alt=""/></li>
                    <li className="footer-info-social"><img src={TG} alt=""/></li>
                    <li className="footer-info-social"><img src={TW} alt=""/></li>
                </ul>
            </div>
        </div>

    );
};

export default MiniFooter;
