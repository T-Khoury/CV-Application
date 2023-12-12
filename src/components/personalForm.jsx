import { useState } from "react";
import Input from "./Input";

export default function PersonalForm() {
    return (
        <>
            <Input label="Name" />
            <Input label="Email" />
            <Input label="Phone" />
            <Input label="Location" />
            <Input label="Summary" />
        </>
    )
        
}