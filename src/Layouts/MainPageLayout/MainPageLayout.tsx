import React, { ReactNode } from "react";
import mainPicture from '../../Assets/hiking-istock1_C.jpg';
import './MainPageLayout.css';

interface MainPageLayoutProps {
    children: ReactNode;
}

export const MainPageLayout = (props: MainPageLayoutProps) => {
    const {children} = props;
    return (
        <div id="main-page-layout">
            <header>IDF site</header>
            <img src={mainPicture} alt="traveling person" />
            {children}
        </div>
    );
};