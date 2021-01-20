import React from 'react';
import './MainPage.css';
import About from "./About/About";
import Achivments from "./Achivments/achivments";
import Location from "./Location/Location";

const MainPage = () => {
    return (
                    <div>
                        <About />
                        <Achivments />
                        <Location />
                    </div>

    );
}

export default MainPage;
