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
        <div className={"grid grid-cols-3 gap-2 py-4"}>
            {data.map((item, index) => (
                <div key={index} className={"bg-green-400 justify-center"}>
                    {item && typeof item === 'object' ? (
                        Object.keys(item).map((key, i) => (
                            <div key={i} className={"bg-orange-400"}>
                                {key === 'image' ? (
                                    <img
                                        src={item[key]}
                                        alt={`Image for ${key}`}
                                        className={"w-28"}
                                    />
                                ) : (
                                    <>
                                        <strong>{formatString(key)}</strong>
                                        {`: ${item[key]} `}
                                    </>
                                )}
                            </div>
                        ))
                    ) : (" ")
                    }
                </div>
            ))}
        </div>
    );
};

export default AlbumList;
