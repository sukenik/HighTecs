import React from "react";
import mainPicture from '../../Assets/hiking-istock1_C.jpg';
import './MainPageLayout.css';

export const MainPageLayout: React.FC = () => {
    return (
        <div id="main-page-layout">
            <header>IDF site</header>
            <img src={mainPicture} alt="traveling person" />
        </div>
    );
};