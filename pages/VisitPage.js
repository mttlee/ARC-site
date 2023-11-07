import Church from "../arise_background.png";
import "../Visit.css";
import React from 'react';
import Dropdown from '../DropdownComponent';
import DropdownContainer from "../DropdownContainer";


export default function VisitPage() {
    return (
        <div>
            <div class="banner2">
                <p class="banner-text">We'd love to meet you!</p>
            </div>

            <div>
                <p class="title-text">Frequently Asked Questions</p>
                <DropdownContainer>
                    <Dropdown />
                    <Dropdown />
                    <Dropdown />
                </DropdownContainer>
            </div>
        
            {/* <img src={Church}></img> */}
            <i class="arrow"/>
        </div> 
    );
}