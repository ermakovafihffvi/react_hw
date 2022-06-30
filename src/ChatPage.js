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
import { useParams } from 'react-router-dom';

function ChatPage() {
    const [messageList, setMessageList] = React.useState([]);
    const [text, setText] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
          botAnswer()
        }, 2000)
    }, [messageList]);

    function getId(array) {
        return array.length ? array[array.length - 1].id + 1 : 0;
    }

    function botAnswer() {
        let lastAuthor = messageList[messageList.length - 1].author;
        if (lastAuthor != "bot") {
            setMessageList(prevState => [
            ...prevState,
            {
                id: getId(prevState),
                author: 'bot',
                text: 'сообщение отправлено'
            }
            ]);
        }
    }

    const updateMessages = (e) => {
        e.preventDefault();
        setMessageList(prevState => [
          ...prevState,
          {
            id: getId(prevState),
            text,
            author
          }
        ]);
    }

    let resultMess = messageList.map(message => {
        return (
          <>
          <ListItem alignItems="flex-start" key={message.id}>
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="" />
            </ListItemAvatar>
            <ListItemText
              primary={message.author}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                  </Typography>
                  {message.text}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </>
        )
    })

    return (
        <Paper sx={{backgroundColor: 'inherit'}}>
            <h1>{id}</h1>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: '0 auto'}}>
              {resultMess}
            </List>

            <Box component="form" onSubmit={updateMessages}
              sx={{
                '& > :not(style)': { m: 1, width: '25ch'}, marginTop: '50px', display: 'flex', justifyContent: 'center'
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField autoFocus 
                  id="outlined-basic" label="Текст сообщения" 
                  variant="outlined" value={text} onChange={(e) => setText(e.target.value)}/>
              </div>
              <div>
                <TextField 
                    id="outlined-basic" label="Автор" 
                    variant="outlined" value={author} onChange={(e) => setAuthor(e.target.value)}/>
              </div>
              <button type="submit">Отправить</button>
            </Box>
        </Paper>
    );
}
export default ChatPage;