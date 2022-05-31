import { Link, useLocation, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import List from './List';
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';

const Header = () => {
    const { user, setUser } = useContext(UserContext)
    return (
        <div>


            <header>
                <h1>Hey {user.name} here is your playlist</h1>
                <nav>
                    <button><Link to="/"><h1>Login</h1> </Link></button>
                    <button><Link to="/Search"><h1>Search</h1></Link></button>
                    <button><Link to="List"><h1>List</h1> </Link></button>
                </nav>
            </header>
        </div>);
}
export default Header;