import React from "react";
import Body from './Body';
import SideBar from './SideBar';
import '../styles/container.css';

export default function Container() {
    
    return (
        <div className="container">
            <div className="coluna-70">
                <Body />
            </div>
            <div className="coluna-30">
                <SideBar />
            </div>
        </div>
    )
}
