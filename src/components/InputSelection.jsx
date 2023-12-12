import { useState } from "react";
import profileIcon from '../assets/profile.svg';
import educationIcon from '../assets/education.svg';
import skillsIcon from '../assets/interests.svg';
import workIcon from '../assets/work.svg';

export default function InputSelection({ activeIndex, switchIndex }){
    return (
        <div className="selection-button-container">
            <button
                onClick={switchIndex} 
            >
                <img src={profileIcon} data-index={0} />
            </button>
            <button
                onClick={switchIndex}
            >
                <img src={educationIcon} data-index={1} />
            </button>
            <button
                onClick={switchIndex}
            >
                <img src={workIcon} data-index={2} />
            </button>
            <button
                onClick={switchIndex}
            >
                <img src={skillsIcon} data-index={3} />
            </button>
            <p>{activeIndex}</p>
        </div>
    )
}