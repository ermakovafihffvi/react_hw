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
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Profile from './Profile';
import ChatPage from './ChatPage';
import NotFound from './NotFound';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

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
