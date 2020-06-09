import React from 'react';
import broken from '../../assets/broken.png';

function Book ({book})
{
    const {coverurl, title, author, md5, year} = book;

    function handleImageError(evt) {
        evt.target.src = broken;
    }

    return (
        <div className="book-tile">
            <img className="cover-image" src={`http://libgen.li/covers/${coverurl}`} onError={handleImageError}/>
            <div className="book-details">
                <p className="bold title">{title}</p>
                <p className="author">{author}</p>
                <p className="year">{`Year: ${year}`}</p>
                <a className="download btn-primary" href={`http://libgen.li/get.php?md5=${md5.toLowerCase()}`}>
                    Download
                </a>
            </div>
        </div>
    )
}

export default Book;