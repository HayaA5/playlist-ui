import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import Search from './Search';

const Header = () => {
    const { user, setUser } = useContext(UserContext)

    return (
        <div className="header">
            <header>
                <nav>
                    {/* Login2 changes */}
                    {/* <button className='button'><Link to="/"><h1>Login</h1> </Link></button> */}
                    {user && (<>
                        {/* <Search /> */}

                        {/* <input type="text" /><Link to="Search"><h1>Search</h1></Link> */}
                        <button className='button'><Link to="Playlist" ><h1>Playlist</h1> </Link></button>
                    </>)}

                </nav>
            </header>
        </div>);
}
export default Header;