import { useState } from "react";


export default function DisplayContainer({ info }) {
    function renderSkillsInterestsHeader(skillsHidden, interestsHidden) {
        if (!skillsHidden && !interestsHidden) {
            return 'SKILLS & INTERESTS'
        } else if (!skillsHidden && interestsHidden) {
            return 'SKILLS'
        } else {
            return 'INTERESTS'
        }
    }
    function renderSkillsInterestsContent(skillsHidden, interestsHidden) {
        if (!skillsHidden && !interestsHidden) {
            return (
            <div className="skills-interests">
                <div className="skills">
                    <h3>SKILLS: </h3><p>{info.other.skills.text}</p>
                </div>
                <div className="intersts">
                    <h3>INTERESTS: </h3><p>{info.other.interests.text}</p>
                </div>
            </div>)
        } else if (!skillsHidden && interestsHidden) {
            return (
                <div className="skills-interests">
                    <p>{info.other.skills.text}</p>
                </div>
            )
        } else {
            return (
                <div className="skills-interests">
                    <p>{info.other.interests.text}</p>
                </div>
            )
        }
    }
    return (
        <div className="display-page">
            <div className="display-personal-section">
                <h1>{info.personal.name}</h1>
                <p>
                    {`${info.personal.email} `}
                    {info.personal.phone !== '' && `| ${info.personal.phone} `}
                    {info.personal.location !== '' && `| ${info.personal.location} `}
                </p>
                {info.personal.summary !== '' && <p>{info.personal.summary}</p>}
            </div>
            <hr />
            {!info.education.hidden && <div className="display-education-section">
                <h2>EDUCATION</h2>
                <hr />
                <div className="school-and-date">
                    {info.education.school && <p>{info.education.school}</p>}
                    <p>{info.education.date}</p>
                </div>
                <div className="degree-and-location">
                    <p>{info.education.degree}</p>
                    <p>{info.education.location}</p>
                </div>
                <ul>
                    {info.education.bullet1 && <li>{info.education.bullet1}</li>}
                    {info.education.bullet2 && <li>{info.education.bullet2}</li>}
                    {info.education.bullet3 && <li>{info.education.bullet3}</li>}
                </ul>
            </div>}
            {!info.work.hidden && <div className="display-work-section">
                <h2>WORK EXPERIENCE</h2>
                <hr />
                <div className="company-and-date">
                    {info.work.jobs[0].company && <p>{info.work.jobs[0].company}</p>}
                    <p>{info.work.jobs[0].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work.jobs[0].title}</p>
                    <p>{info.work.jobs[0].location}</p>
                </div>
                <ul>
                    {info.work.jobs[0].bullet1 && <li>{info.work.jobs[0].bullet1}</li>}
                    {info.work.jobs[0].bullet2 && <li>{info.work.jobs[0].bullet2}</li>}
                    {info.work.jobs[0].bullet3 && <li>{info.work.jobs[0].bullet3}</li>}
                </ul>
                <div className="company-and-date">
                    {info.work.jobs[1].company && <p>{info.work.jobs[1].company}</p>}
                    <p>{info.work.jobs[1].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work.jobs[1].title}</p>
                    <p>{info.work.jobs[1].location}</p>
                </div>
                <ul>
                    {info.work.jobs[1].bullet1 && <li>{info.work.jobs[1].bullet1}</li>}
                    {info.work.jobs[1].bullet2 && <li>{info.work.jobs[1].bullet2}</li>}
                    {info.work.jobs[1].bullet3 && <li>{info.work.jobs[1].bullet3}</li>}
                </ul>
                <div className="company-and-date">
                    {info.work.jobs[2].company && <p>{info.work.jobs[2].company}</p>}
                    <p>{info.work.jobs[2].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work.jobs[2].title}</p>
                    <p>{info.work.jobs[2].location}</p>
                </div>
                <ul>
                    {info.work.jobs[2].bullet1 && <li>{info.work.jobs[2].bullet1}</li>}
                    {info.work.jobs[2].bullet2 && <li>{info.work.jobs[2].bullet2}</li>}
                    {info.work.jobs[2].bullet3 && <li>{info.work.jobs[2].bullet3}</li>}
                </ul>

            </div>}
            {(!info.other.skills.hidden || !info.other.interests.hidden) && <div className="display-skills-section">
                <h2>{renderSkillsInterestsHeader(info.other.skills.hidden, info.other.interests.hidden)}</h2>
                <hr />
                {renderSkillsInterestsContent(info.other.skills.hidden, info.other.interests.hidden)}
            </div>}
        </div>
    )
}