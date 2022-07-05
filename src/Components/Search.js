import { UserContext } from '../Context/UserContext';
import { SongContext } from '../Context/SongContext';
import React, { useContext, useState } from 'react';
import Song from './Song'
import { useRef } from "react";



function Search() {
    const inputElement = useRef();
    const { user, setUser } = useContext(UserContext);
    const { song, setSong } = useContext(SongContext);
    const [list, setList] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c472b43c32mshd916437f504d124p105394jsnbe6c63168738',
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
        }
    };




    function getSongs(value) {
        fetch(`https://simple-youtube-search.p.rapidapi.com/search?query=${value}`, options)
            .then(response => response.json())
            .then(response => setList(response.results))

            .catch(err => console.error(err));




    }


    const isPlaylistContainsSong = (playlist, song) => {
        debugger;
        return playlist?.some(obj => obj.id == song.id);
    }

    const onAdd = (song => {
        // debugger;
        // setSong([...song, { id: "a" }]);
        setSong(songs => isPlaylistContainsSong(songs, song) ?
            songs
            : [...songs, { id: song.id, title: song.title }]);
        // debugger;
    })
    if (!list) return 'Loading...'

    return <div className="Search">

        <h2> 🎵 Hey {user} What do you want to hear today?  🎵</h2>
        <input type="search" placeholder="" ref={inputElement} />
        <button className='button' onClick={() => {
            // debugger;
            getSongs(inputElement.current.value);
            // debugger;
        }}>🎧</button>
        {
            list.length > 0 ?
                list.map(v => <Song onAdd={onAdd} key={v.id}
                    {...v} />) :
                <h4>Not found</h4>
        }
    </div>
}

export default Search 