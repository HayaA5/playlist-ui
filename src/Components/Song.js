import React, { useContext } from 'react';
import { SongContext } from '../Context/SongContext';

function Song(props) {
    debugger;

    const { id, title } = props;
    const { song, setSong } = useContext(SongContext)
    function preventAddSong(array) {
        return array
    }
    return (
        <div className="song">
            <div>Title: {title}</div>

            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            {props.onRemove && <button onClick={() => props.onRemove(props)}>Remove</button>}
            {props.onAdd && <button onClick={() => props.onAdd(props)}>Add</button>}
        </div>
    )
}

export default Song

