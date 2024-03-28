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
            <div className="display-work-section">
                <h2>WORK EXPERIENCE</h2>
                <hr />
                <div className="company-and-date">
                    {info.work[0].company && <p>{info.work[0].company}</p>}
                    <p>{info.work[0].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work[0].title}</p>
                    <p>{info.work[0].location}</p>
                </div>
                <ul>
                    {info.work[0].bullet1 && <li>{info.work[0].bullet1}</li>}
                    {info.work[0].bullet2 && <li>{info.work[0].bullet2}</li>}
                    {info.work[0].bullet3 && <li>{info.work[0].bullet3}</li>}
                </ul>
                <div className="company-and-date">
                    {info.work[1].company && <p>{info.work[1].company}</p>}
                    <p>{info.work[1].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work[1].title}</p>
                    <p>{info.work[1].location}</p>
                </div>
                <ul>
                    {info.work[1].bullet1 && <li>{info.work[1].bullet1}</li>}
                    {info.work[1].bullet2 && <li>{info.work[1].bullet2}</li>}
                    {info.work[1].bullet3 && <li>{info.work[1].bullet3}</li>}
                </ul>
                <div className="company-and-date">
                    {info.work[2].company && <p>{info.work[2].company}</p>}
                    <p>{info.work[2].date}</p>
                </div>
                <div className="title-and-location">
                    <p>{info.work[2].title}</p>
                    <p>{info.work[2].location}</p>
                </div>
                <ul>
                    {info.work[2].bullet1 && <li>{info.work[2].bullet1}</li>}
                    {info.work[2].bullet2 && <li>{info.work[2].bullet2}</li>}
                    {info.work[2].bullet3 && <li>{info.work[2].bullet3}</li>}
                </ul>

            </div>
            <div className="display-skills-section"></div>
        </div>
    )
}