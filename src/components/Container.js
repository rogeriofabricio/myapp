import React from "react";
import Body from './Body';
import SideBar from './SideBar';
import '../styles/container.css';

export default function Container() {
    
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <Body />
                </div>
                <div class="col-2">
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
