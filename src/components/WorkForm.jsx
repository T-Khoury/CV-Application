import Input from "./Input";

function JobInput({ jobIndex, info, setInfo }) {

    function handleCompanyChange(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    company: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }

    function handleDateChange(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    date: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    function handleTitleChange(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    title: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    function handleLocationChange(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    location: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    
    function handleBullet1Change(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    bullet1: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    function handleBullet2Change(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    bullet2: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    function handleBullet3Change(e) {
        let workArray = info.work.jobs
        const newWorkArray = info.work.jobs.map((job) => {
            if (job === workArray[jobIndex]) {
                return {
                    ...job,
                    bullet3: e.target.value
                }
            } else {
                return job;
            }
        })
        setInfo({
            ...info,
            work: {
                ...info.work,
                jobs: newWorkArray
            }
        })
    }
    return (
        <div className="job">
            <Input
                label="Company Name"
                value={info.work.jobs[jobIndex].company}
                onChange={handleCompanyChange}
            />
            <Input
                label="Time frame"
                value={info.work.jobs[jobIndex].date}
                onChange={handleDateChange}
            />
            <Input
                label="Job Title"
                value={info.work.jobs[jobIndex].title}
                onChange={handleTitleChange}
            />
            <Input
                label="Job Location"
                value={info.work.jobs[jobIndex].location}
                onChange={handleLocationChange}
            />
            <Input
                label="Bullet 1"
                value={info.work.jobs[jobIndex].bullet1}
                onChange={handleBullet1Change}
            />
            <Input
                label="Bullet 2"
                value={info.work.jobs[jobIndex].bullet2}
                onChange={handleBullet2Change}
            />
            <Input
                label="Bullet 3"
                value={info.work.jobs[jobIndex].bullet3}
                onChange={handleBullet3Change}
            />
        </div>
    )
}

export default function WorkForm({ info, setInfo }){
    /*const [jobNumber, setJobNumber] = useState(1);

    function handleJobIncrease() {
        setJobNumber(jobNumber + 1);
    } */
    function handleHiddenToggle() {
        setInfo({
            ...info,
            work: {
                ...info.work,
                hidden: !info.work.hidden
            }
        });
    }
    return (
        <>
            <JobInput info={info} setInfo={setInfo} jobIndex={0} />
            <hr />
            <JobInput info={info} setInfo={setInfo} jobIndex={1} />
            <hr />
            <JobInput info={info} setInfo={setInfo} jobIndex={2} />
            <button className="hide-section" onClick={handleHiddenToggle}>{info.work.hidden ? 'Show' : 'Hide'}</button>
        </>
    )
}