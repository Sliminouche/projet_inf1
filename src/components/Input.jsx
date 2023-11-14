export default function Input({ label, name, type, value, onChange, className, ...props }) {
    const inputClassName = `border py-2 px-4 rounded-sm ${className || ''}`;

    return (
        <>
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
                {...props}
            />
        </>
    );
}