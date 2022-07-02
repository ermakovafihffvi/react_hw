//import logo from './logo.svg';
import '../css/App.css';
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Profile from './Profile';
import ChatPage from './ChatPage';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path={'/profile'} element={<Profile/>}></Route>
          <Route path={'/chat/:id'} element={<ChatPage/>}></Route>
        </Route>
        <Route path={'*'} element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
