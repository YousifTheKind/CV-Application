import "../styles/Input.css";
export default function Input({ label, type = "text", id, pattern, onChange }) {
    return (
        <div className="input-grid">
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                name={id}
                id={id}
                pattern={pattern}
                onChange={onChange}
                required
            />
        </div>
    );
}
