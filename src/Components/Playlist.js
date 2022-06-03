import { UserContext } from '../Context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"

function Playlist() {
    const { user, setUser } = useContext(UserContext)
    const [list, setList] = useState()
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-dl4.p.rapidapi.com',
            'X-RapidAPI-Key': 'c472b43c32mshd916437f504d124p105394jsnbe6c63168738'
        }
    };

    useEffect(() => {
        fetch('https://youtube-dl4.p.rapidapi.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPeCVX_ogjKo', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }, [])

    if (!list) return 'Loading...'

    return <div className="Playlist">


        <h2> 🎵 Hey {user.name} Here is your playlist 🎵</h2>
        {
            list.length ?
                list.map(v => <h3><Link to={'/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPeCVX_ogjKo/' + v}>{v}</Link></h3>) :
                <h4>Not found</h4>
        }
    </div>
}

export default Playlist 