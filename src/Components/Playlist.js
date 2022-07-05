import { UserContext } from '../Context/UserContext';
import { SongContext } from '../Context/SongContext';
import Song from './Song';
import React, { useContext } from 'react';

function Playlist() {
    const { user, setUser } = useContext(UserContext)
    const { song, setSong } = useContext(SongContext)

    const onRemove = _song => {
        setSong(songs => songs.filter(song => song.id !== _song.id))
    }
    return <div className="Playlist">
        <h2> 🎵 Hey {user} Here is your playlist 🎵</h2>
        {song.length > 0 ?
            song.map(v =>
                <>
                    <Song key={v.id} onRemove={onRemove} {...v} />
                </>
            )
            : <h4>Empty playlist</h4>}
    </div>
}
export default Playlist




