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

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

function Home() {
  const [dense, setDense] = React.useState(false);
  const [chatList, setChatList] = React.useState([
    {
      id: 1,
      name: "chat-1"
    },
    {
      id: 2,
      name: "chat-2"
    },
    {
      id: 3,
      name: "chat-3"
    }
  ]);

  let resultChat = chatList.map(chat => {
    return(
      <ListItem key={chat.id}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <NavLink to={`/chat/${chat.id}`}>
            <ListItemText primary={chat.name}/>
        </NavLink>
        
      </ListItem>
    )
  })

  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Chat List
            </Typography>
            <Demo>
              <List dense={dense}>
                {resultChat}
              </List>
            </Demo>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>

    </div>
  );
}

export default Home;