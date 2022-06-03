import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Search from './Components/Search';
import Playlist from './Components/Playlist';
import { UserContext } from './Context/UserContext';


export default function App() {
  const [user, setUser] = useState()

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }} >
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Login />} />
          {user && (
            <>
              <Route path="/Search" element={<Search />} />
              <Route path="/Playlist" element={<Playlist />} />
            </>)
          }
        </Routes >
      </UserContext.Provider>
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