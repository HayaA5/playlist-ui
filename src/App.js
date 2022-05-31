import './App.css';
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Login';
import Search from './Components/Search';
import List from './Components/List';
import { UserContext } from './Context/UserContext';


export default function App() {
  const [user, setUser] = useState({ name: "shira" })
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }} >
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/List" element={<List />} />
        </Routes >
      </UserContext.Provider>
    </div>
  );
}



