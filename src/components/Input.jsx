export default function Input({ type, label, value, onChange }) {
    return (
        <label>
            {label}
            {' '}
            {type === 'textarea' 
            ? <textarea className="skills-and-interests"></textarea> 
            : <input
            type={type}
            value={value}
            onChange={onChange}
            />}
        </label>
    )
}
