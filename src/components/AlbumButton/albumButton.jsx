const Button = ({ 
    children = 'Button', 
    disabled = false,
    type,
    onClick
}) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button
            onClick={handleRandomAlbum}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quel album écouter aujourd'hui ?
            </button>
            <span></span>
        </>
    );
}
 
export default Button;
