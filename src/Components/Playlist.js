import { UserContext } from '../Context/UserContext';
import { SongContext } from '../Context/SongContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Playlist() {
    debugger;
    const { user, setUser } = useContext(UserContext)
    const { song, setSong } = useContext(SongContext)



    return <div className="Playlist">


        <h2> 🎵 Hey {user} Here is your playlist 🎵</h2>





        {song.length > 0 ? song.map(
            v => <div>{v.video.id}:{v.title}</div>)
            : <h4>Empty playlist</h4>}
    </div>
}

export default Playlist 