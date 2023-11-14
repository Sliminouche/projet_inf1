const AlbumButton = ({ 
    primary,
    onClick 
}) => {
    const classNames = primary ? 'border' : 'font-bold';

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

const handleRandomAlbum = () => {
    const randomIndex = Math.floor(Math.random() * albums.length);
    setSelectedAlbum(albums[randomIndex]);
  };
 
export default AlbumButton;
