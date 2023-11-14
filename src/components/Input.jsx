export default function Input({ label, name, type, value, onChange, className, required, onEnterPress, ...props }) {
    const inputClassName = `text-sm border px-2 h-10 rounded-sm ${className || ''}`;

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onEnterPress && onEnterPress();
        }
    };

    return (
        <div className={"block"}>
            <label className="block text-gray-700 font-bold text-sm mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                className={inputClassName}
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                required={required}
                onKeyPress={handleKeyPress}
                {...props}
            />
        </div>
    );
}
