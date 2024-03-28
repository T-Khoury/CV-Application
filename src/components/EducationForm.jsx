import Input from "./Input";

export default function EducationForm({ info, setInfo }) {
    function handleSchoolChange(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                school: e.target.value
            }
        });
    }
    function handleDateChange(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                date: e.target.value
            }
        });
    }
    function handleDegreeChange(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                degree: e.target.value
            }
        });
    }
    function handleLocationChange(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                location: e.target.value
            }
        });
    }
    function handleBullet1Change(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                bullet1: e.target.value
            }
        });
    }
    function handleBullet2Change(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                bullet2: e.target.value
            }
        });
    }
    function handleBullet3Change(e) {
        setInfo({
            ...info,
            education: {
                ...info.education,
                bullet3: e.target.value
            }
        });
    }
    function handleHiddenToggle() {
        setInfo({
            ...info,
            education: {
                ...info.education,
                hidden: !info.education.hidden
            }
        });
    }
    return (
        <>
            <Input
                label="School Name"
                value={info.education.school}
                onChange={handleSchoolChange}
            />
            <Input
                label="Graduation Date"
                value={info.education.date}
                onChange={handleDateChange}
            />
            <Input
                label="Degree" 
                value={info.education.degree}
                onChange={handleDegreeChange}
            />
            <Input
                label="Location"
                value={info.education.location}
                onChange={handleLocationChange}
            />
            <Input
                label="Bullet 1"
                value={info.education.bullet1}
                onChange={handleBullet1Change}
            />
            <Input
                label="Bullet 2"
                value={info.education.bullet2}
                onChange={handleBullet2Change}
            />
            <Input
                label="Bullet 3"
                value={info.education.bullet3} 
                onChange={handleBullet3Change}
            />
            <button onClick={handleHiddenToggle}>{info.education.hidden ? 'Show' : 'Hide'}</button>
        </>
    )
}