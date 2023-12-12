export default function Input({ type, label, value, onChange }) {
    return (
        <label>
            {label}
            {' '}
            <input
                type={type}
                value={value}
                onChange={onChange}
            />
        </label>
    )
}
