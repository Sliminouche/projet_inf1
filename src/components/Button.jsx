export default function Button({ title, onClick, className, ...props }) {
    const buttonClassName = `border font-bold py-2 px-4 rounded-sm ${className || ''}`;

    return (
        <>
            <button
                className={buttonClassName}
                onClick={onClick}
                {...props}
            >
                {title}
            </button>
        </>
    );
}
