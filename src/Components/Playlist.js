import { UserContext } from '../Context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Playlist() {
    debugger;
    const { user, setUser } = useContext(UserContext)
    const [list, setList] = useState()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
            'X-RapidAPI-Key': 'c472b43c32mshd916437f504d124p105394jsnbe6c63168738'
        }
    };

    // useEffect(() => {
    //     fetch('https://simple-youtube-search.p.rapidapi.com/search?query=never%2Bgonna%2Bgive%2Byou%2Bup&safesearch=false', options)
    //         .then(response => response.json())
    //         .then(data => { setList(data) })
    // }, [])

    // if (!list) return 'Loading...'

    return <div className="Playlist">


        <h2> 🎵 Hey {user} Here is your playlist 🎵</h2>
        {/* {
            list.length ?
                list.map(v => <h3><Link to={'/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPeCVX_ogjKo/' + v}>{v}</Link></h3>) :
                <h4>Not found</h4>
        } */}
    </div>
}

export default Playlist 