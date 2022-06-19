import React, { useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";
import Search from './Search'
import { SongContext } from '../Context/SongContext';




function Song(props) {

    const { video_id, title } = props;
    // const [song, setSong] = useContext(SongContext)
    // const addToPlaylist = (e) => {
    //     debugger;
    //     setSong(
    //         [...song, { id: { video_id } }])
    //     debugger;
    // }



    return (
        <div className="song">
            <div>Title: {title}</div>

            <div className="video-responsive">
                <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${video_id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                />
            </div>
            <button className='btn-playlist' onClick={(e) => { }} >Add to playlist</button>
            {/* addToPlaylist(e) */}


        </div>
    )
}

export default Song