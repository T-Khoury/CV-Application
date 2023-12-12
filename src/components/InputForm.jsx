import { useState } from "react";
import InputSelection from "./InputSelection";
import PersonalForm from "./personalForm";

export default function InputContainer({ info }) {
    const [activeIndex, setActiveIndex] = useState(0);

    function switchIndex(e) {
        setActiveIndex(e.target.dataset.index)
    };
    
    return (
        <div className="input-form">
            <InputSelection
                activeIndex={activeIndex}
                switchIndex={switchIndex}
            />
            <PersonalForm />
            
        </div>
    )
}