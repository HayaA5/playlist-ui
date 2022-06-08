import { UserContext } from '../Context/UserContext';
import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Song from './Song'
function Search() {
    // debugger;
    let userSearch;
    const value = 'avraham fried';
    const { user, setUser } = useContext(UserContext);
    const [list, setList] = useState();
    useEffect(getSongs, []);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com',
            'X-RapidAPI-Key': 'c472b43c32mshd916437f504d124p105394jsnbe6c63168738'
        }
    };

    // function getSongs() {

    //     fetch('https://youtube-search6.p.rapidapi.com/search/?query=%D7%90%D7%91%D7%A8%D7%94%D7%9D%20%D7%A4%D7%A8%D7%99%D7%93&number=20&country=us&lang=en', options)
    //         .then(response => response.json())
    //         .then(response => console.log(response))
    //         .catch(err => console.error(err));

    // }

    function getSongs(value) {
        //debugger;
        fetch(`https://youtube-search6.p.rapidapi.com/search/?query=${value}`, options)
            .then(response => response.json())
            .then(response => { setList(response) })
            .catch(err => console.error(err));
    }
    // if (!list) return 'Loading...'

    return <div className="Search">

        <h2> 🎵 Hey {user} Here is your song 🎵</h2>


        <input type="text" placeholder="" onChange={(e) => { userSearch = e.target.value; debugger; }} />
        <button className='button' onClick={() => getSongs(userSearch)}>🎧</button>

        {/* <Link to="Search"><h1>Search</h1></Link> */}
        {/* <button className='button'><Link to="Playlist" ><h1>Playlist</h1> </Link></button> */}


        {
            list.length ?
                list.map(v => <Song />) :
                <h4>Not found</h4>
        }

        {/* {
            list.length ?
                list.map(v => <h3><Link to={'/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPeCVX_ogjKo/' + v}>{v}</Link></h3>) :
                <h4>Not found</h4>
        } */}
    </div>
}

export default Search 