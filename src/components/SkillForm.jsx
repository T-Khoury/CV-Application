import Input from "./Input";

export default function SkillsForm({ info, setInfo }) {
    function handleSkillsChange(e) {
        setInfo({
            ...info,
            other: {
                ...info.other,
                skills: e.target.value
            }
        });
    }
    function handleInterestsChange(e) {
        setInfo({
            ...info,
            other: {
                ...info.personal,
                interests: e.target.value
            }
        });
    }
    return (
        <>
            <Input
                type="textarea"
                label="Skills"
                value={info.other.skills}
                onChange={handleSkillsChange}

            />
            <Input
                type="textarea"
                label="Interests"
                value={info.other.interests}
                onChange={handleInterestsChange}
            />
        </>
    )
}