import { useState } from "react";
import Input from "./Input";

function JobInput() {
    return (
        <div className="job">
            <Input label="Company Name" />
            <Input label="Timeframe" />
            <Input label="Job Title" />
            <Input label="Bullet 1" />
            <Input label="Bullet 2" />
            <Input label="Bullet 3" />
        </div>
    )
}

export default function WorkForm(){
    /*const [jobNumber, setJobNumber] = useState(1);

    function handleJobIncrease() {
        setJobNumber(jobNumber + 1);
    } */
    return (
        <>
            <JobInput />
        </>
    )
}