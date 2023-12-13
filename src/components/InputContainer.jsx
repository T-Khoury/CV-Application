import { useState } from "react";
import InputSelection from "./InputSelection";
import PersonalForm from "./PersonalForm";
import WorkForm from "./WorkForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillForm";


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
                return <EducationForm info={info} setInfo={setInfo}/>
            case 2:
                return <WorkForm info={info} setInfo={setInfo}/>
            case 3:
                return <SkillsForm info={info} setInfo={setInfo}/>
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