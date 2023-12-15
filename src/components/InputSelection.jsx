import { useState } from "react";
import profileIcon from '../assets/profile.svg';
import educationIcon from '../assets/education.svg';
import skillsIcon from '../assets/interests.svg';
import workIcon from '../assets/work.svg';

export default function InputSelection({ activeIndex, switchIndex }) {
    return (
        <div className="selection-button-container">
            <button
                onClick={() => switchIndex(0)} 
            >
                <img src={profileIcon} />
            </button>
            <button
                onClick={() => switchIndex(1)}
            >
                <img src={educationIcon} />
            </button>
            <button
                onClick={() => switchIndex(2)}
            >
                <img src={workIcon} />
            </button>
            <button
                onClick={() => switchIndex(3)}
            >
                <img src={skillsIcon} />
            </button>
        </div>
    )
}