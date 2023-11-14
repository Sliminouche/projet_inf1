import React from 'react';

const AlbumList = ({data}) => {

    function formatString(str) {
        const words = str.split('_'); // Divise la chaîne à chaque underscore

        if (words.length === 0) {
            return str; // Aucun mot à formater, retourne la chaîne d'origine
        }

        const firstWord = words[0].charAt(0).toUpperCase() + words[0].slice(1);
        const restOfWords = words.slice(1).join(' ');

        return `${firstWord} ${restOfWords}`;
    }


    if (!data) {
        return null;
    }

    return (
        <div className={"grid grid-cols-3 gap-2 gap-y-14 py-16"}>
            {data.map((item, index) => (
                <div key={index} className={"justify-center text-center"}>
                    {item && typeof item === 'object' ? (
                        <>
                            {item.image && (
                                <div className={"flex justify-center"}>
                                    <img
                                        src={item.image}
                                        alt={`Image for ${item.image}`}
                                        className={"w-56 mb-3"}
                                    />
                                </div>
                            )}

                            {Object.keys(item)
                                .filter((key) => key !== 'image')
                                .map((key, i) => (
                                    <div key={i} className={""}>
                                        <strong>{formatString(key)}</strong>
                                        {`: ${item[key]} `}
                                    </div>
                                ))}
                        </>
                    ) : (" ")}
                </div>
            ))}
        </div>
    );

};

export default AlbumList;
