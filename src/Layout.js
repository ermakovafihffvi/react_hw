//import logo from './logo.svg';
import './css/App.css';
import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
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