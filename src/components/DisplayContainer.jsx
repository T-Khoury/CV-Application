import { useState } from "react";


export default function DisplayContainer({ info }) {
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
            <div className="display-education-section">
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
            </div>
            <div className="display-work-section">
                <h2>WORK EXPERIENCE</h2>
                <hr />
                {info.work[0].company && <p>2{info.work[0].company}</p>}

            </div>
            <div className="display-skills-section"></div>
        </div>
    )
}