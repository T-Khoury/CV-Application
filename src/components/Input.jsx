export default function Input({ type, label, value, onChange }) {
    return (
        <label>
            {label}
            {' '}
            {type === 'textarea' 
            ? <textarea 
            className="skills-and-interests" 
            value={value} 
            onChange={onChange}
            />
            : <input
            type={type}
            value={value}
            onChange={onChange}
            />}
        </label>
    )
}
