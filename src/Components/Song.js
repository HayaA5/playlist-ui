import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Search from './Search'


function Song(props) {
    debugger;
    const {video_id, title}=props;
   // let video_id=useParams();


    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products/'+video_id)
    //       .then(res =>  res.json())
    //       .then(data => {setList(data)})
    //   }, [])

    return (
        <div className="song">
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
        <div>video id:{video_id}</div>
        <div>Title: {title}</div>
        </div>
    )
}

export default Song