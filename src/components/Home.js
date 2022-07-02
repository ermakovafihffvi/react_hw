//import logo from './logo.svg';
import '../css/App.css';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import FolderIcon from '@mui/icons-material/Folder';
import { NavLink, Outlet } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField';
import {theme} from "../theme";

import { getChats } from "../redux/reducers/chatReducer/chatSelector";
import {useDispatch, useSelector} from "react-redux";
import { ADD_CHAT, DELETE_CHAT } from "../redux/actionTypes";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.blue,
}));

function Home() {
  const [dense, setDense] = React.useState(false);
  const [ name, setName ] = useState('');
  const chatList = useSelector(getChats);
  const dispatch = useDispatch();

  const deleteChat = (id) => {
    dispatch({
      type: DELETE_CHAT,
      payload: id
    });
  }

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const addChat = () => {
    const obj = {
      id: Math.random(),
      name: name
    };
    dispatch({
      type: ADD_CHAT,
      payload: obj
    });
  }

  let resultChat = chatList.map(chat => {
    return(
      <ListItem key={chat.id}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <NavLink to={`/chat/${chat.id}`}>
            <ListItemText primary={chat.name}/>
        </NavLink>
        <DeleteForeverIcon onClick={()=>deleteChat(chat.id)} />
      </ListItem>
    )
  })

  return (
    <div>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Paper className="chatList">
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              Chat List
            </Typography>
            <Demo sx={{marginBottom: "15px",}}>
              <List dense={dense}>
                {resultChat}
              </List>
            </Demo>
            <TextField autoFocus className="inputChat"
                  id="outlined-basic" label="Название чата" 
                  variant="outlined" value={name} onChange={handleChange}/>
            <AddCircleIcon className="addCircle" sx={{color: "primary.main", fontSize: "40px"}} onClick={addChat}/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          
        </Grid>
      </Grid>

    </div>
  );
}

export default Home;