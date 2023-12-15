import Input from "./Input";

export default function PersonalForm({ info, setInfo }) {
    console.log(info.name)

    function handleNameChange(e) {
        setInfo({
            ...info,
            personal: {
                ...info.personal,
                name: e.target.value
            }
        });
    }
    function handleEmailChange(e) {
        setInfo({
            ...info,
            personal: {
                ...info.personal,
                email: e.target.value
            }
        });
    }
    function handleTelChange(e) {
        setInfo({
            ...info,
            personal: {
                ...info.personal,
                phone: e.target.value
            }
        });
    }
    function handleLocationChange(e) {
        setInfo({
            ...info,
            personal: {
                ...info.personal,
                location: e.target.value
            }
        });
    }
    function handleSummaryChange(e) {
        setInfo({
            ...info,
            personal: {
                ...info.personal,
                summary: e.target.value
            }
        });
    }
    return (
        <>
            <Input
                label="Name" 
                value={info.personal.name}
                onChange={handleNameChange}
            />
            <Input
                type="email"
                label="Email"
                value={info.personal.email}
                onChange={handleEmailChange}
            />
            <Input
                type="tel"
                label="Phone"
                value={info.personal.phone}
                onChange={handleTelChange}
            />
            <Input
                label="Location"
                value={info.personal.location}
                onChange={handleLocationChange}
            />
            <Input
                label="Summary"
                value={info.personal.summary}
                onChange={handleSummaryChange}
            />
        </>
    )
        
}