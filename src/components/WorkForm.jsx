import Input from "./Input";

function JobInput({ jobIndex, info, setInfo }) {

    return (
        <div className="job">
            <Input
                label="Company Name"
                value={info.work[jobIndex].company}
            />
            <Input
                label="Timeframe"
                value={info.work[jobIndex].date}
            />
            <Input
                label="Job Title"
                value={info.work[jobIndex].title}
            />
            <Input
                label="Bullet 1"
                value={info.work[jobIndex].bullet1}
            />
            <Input
                label="Bullet 2"
                value={info.work[jobIndex].bullet2}
            />
            <Input
                label="Bullet 3"
                value={info.work[jobIndex].bullet3}
            />
        </div>
    )
}

export default function WorkForm({ info, setInfo }){
    /*const [jobNumber, setJobNumber] = useState(1);

    function handleJobIncrease() {
        setJobNumber(jobNumber + 1);
    } */
    return (
        <>
            <JobInput info={info} setInfo={setInfo} jobIndex={0} />
            <br />
            <JobInput info={info} setInfo={setInfo} jobIndex={1} />
            <br />
            <JobInput info={info} setInfo={setInfo} jobIndex={2} />
        </>
    )
}