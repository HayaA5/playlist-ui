import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Search from './Components/Search';
import Playlist from './Components/Playlist';
import { UserContext } from './Context/UserContext';
import { Navigate } from 'react-router-dom';
import Song from './Components/Song';
import { SongContext } from './Context/SongContext';


export default function App() {
  const [user, setUser] = useState()
  const [song, setSong] = useState()


  //debugger;
  return (
    <div>
      <SongContext.Provider value={{ song, setSong }} >
        <UserContext.Provider value={{ user, setUser }} >
          <div className="App">
            <Header />
          </div>
          <Routes>




            {user ? (
              <>
                <Route path="/Login" element={<Navigate to="/Search" />} />
                <Route path="/Search" element={<Search />} />
                <Route path="/Playlist" element={<Playlist />} />
                <Route path="/Playlist/:id" element={<Song />} />
              </>) : (
              <>
                <Route path="Login" element={<Login />} />
                <Route path="/*" element={<Navigate to="/Login" />} />
              </>
            )
            }
          </Routes >
        </UserContext.Provider>
      </SongContext.Provider>
    </div>
  );
}

{/* {!user ? <div>en user</div> : <div>yesh user</div>}
        {!user && <div>en user</div>}
        {!user || <div>yesh user</div>} */}


        // if (user) {
          //   return (
          //     <div>
          //
          //     </div>
          //   )
          // }