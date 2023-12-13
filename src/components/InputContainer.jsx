import { useState } from "react";
import InputSelection from "./InputSelection";
import PersonalForm from "./personalForm";
import WorkForm from "./workForm";
import EducationForm from "./educationForm";


export default function InputContainer({ info, setInfo }) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    function switchIndex(index) {
        setActiveIndex(parseInt(index))
    }

    function switchForm(activeIndex) {
        switch (activeIndex) {
            case 0:
                return <PersonalForm info={info} setInfo={setInfo}/>
            case 1:
                return <EducationForm />
            case 2:
                return <WorkForm />
            case 3:
                return <SkillsForm />
        }
    }


    
    return (
        <div className="input-form">
            <InputSelection
                activeIndex={activeIndex}
                switchIndex={switchIndex}
            />
            {switchForm(activeIndex)}
            
        </div>
    )
}