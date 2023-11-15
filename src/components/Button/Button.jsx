import {RiLoader4Fill} from "react-icons/ri";

export default function Button({title, onClick, className, loading, ...props}) {
    const buttonClassName = `border font-bold rounded-sm px-4 py-2 flex items-center justify-center ${className || ''}`;

    return (
        <>
            <button
                className={buttonClassName}
                onClick={onClick}
                disabled={loading}
                {...props}
            >
                {loading ? (
                    <RiLoader4Fill className={'animate-spin text-xl '}/>
                ) : (
                    title
                )}
            </button>
        </>
    );
}
