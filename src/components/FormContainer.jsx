import { useState } from "react";
import PersonalForm from "./personalForm";
import WorkForm from "./workForm";
import EducationForm from "./educationForm";

export default function FormContainer({ activeIndexNumber }) {
    console.log(activeIndexNumber)

    return (
        <>
            {activeIndexNumber === 0 && <PersonalForm />}
            {activeIndexNumber === 1 && <EducationForm />}
            {activeIndexNumber === 2 && <WorkForm />}
        </>
        
    )
}