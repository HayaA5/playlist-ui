import "./Header.css";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <Link to="/" class="navbar-brand">🎧</Link>
            <Link to="/" class="nav-link active">Home</Link>
            {user && (
                <>
                    <Link to="/SearchPage" class="nav-link active">SearchPage</Link>
                    <Link to="/SongPage" class="nav-link active">SongPage</Link>
                </>
            )}
            {user && (
                <>
                    <a class="nav-link active" href="#">
                        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" width="30" height="30" class="d-inline-block align-text-top" />
                        {user.email}
                    </a>
                    <input class="form-control me-2" type="search" placeholder="🎵 Search song..." aria-label="Search" />
                    <Link to="/SearchPage"> <button class="btn btn-outline-success" type="submit">Search</button></Link>

                </>
            )}
        </div>

    );
}