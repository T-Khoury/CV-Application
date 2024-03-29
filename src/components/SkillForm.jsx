import Input from "./Input";

export default function SkillsForm({ info, setInfo }) {
    function handleSkillsTextChange(e) {
        setInfo({
            ...info,
            other: {
                ...info.other,
                skills: {
                    ...info.other.skills,
                    text: e.target.value
                }
            }
        });
    }
    function handleSkillsHiddenChange() {
        setInfo({
            ...info,
            other: {
                ...info.other,
                skills: {
                    ...info.other.skills,
                    hidden: !info.other.skills.hidden
                }
            }
        });
    }
    function handleInterestsTextChange(e) {
        setInfo({
            ...info,
            other: {
                ...info.other,
                interests: {
                    ...info.other.interests,
                    text: e.target.value
                }
            }
        });
    }
    function handleInterestsHiddenChange() {
        setInfo({
            ...info,
            other: {
                ...info.other,
                interests: {
                    ...info.other.interests,
                    hidden: !info.other.interests.hidden
                }
            }
        });
    }
    return (
        <>
            <div className="skills-input">
                <Input
                    type="textarea"
                    label="Skills"
                    value={info.other.skills.text}
                    onChange={handleSkillsTextChange}
                />
                <button onClick={handleSkillsHiddenChange}>{info.other.skills.hidden ? 'Show' : 'Hide'}</button>
            </div>
            <div className="interests-input">
                <Input
                    type="textarea"
                    label="Interests"
                    value={info.other.interests.text}
                    onChange={handleInterestsTextChange}
                />
                <button onClick={handleInterestsHiddenChange}>{info.other.interests.hidden ? 'Show' : 'Hide'}</button>
            </div>
        </>
    )
}