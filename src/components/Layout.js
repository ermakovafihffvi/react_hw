//import logo from './logo.svg';
import '../css/App.css';
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
    return (
      <>
        <header>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer></footer>
      </>
    );
  }
  
  export default Layout;