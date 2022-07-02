import '../css/App.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMessages } from "../redux/reducers/messageReducer/messageSelector";
import {useDispatch, useSelector} from "react-redux";
import { ADD_MESSAGE } from "../redux/actionTypes";

import {getId} from "./getId.js";
import ChatPagePresent from './ChatPagePresent';

function ChatPage() {
    //const [messageList, setMessageList] = React.useState([]);
    const { chatId } = useParams();
    const allmessageList = useSelector(getMessages);
    const messageList = allmessageList.filter((message) => {
      if(!chatId) {
        console.log('null');
      }
      //console.log('message.chatId: '+message.chatId);
      //console.log('chatId: '+chatId);
      return message.chatId == Number(chatId)
    });
    const dispatch = useDispatch();
    const [text, setText] = React.useState('');
    const [author, setAuthor] = React.useState('');

    const addMessage = (e) => {
        //console.log('chatId: '+ chatId);
        e.preventDefault();
        let obj = {
          id: getId(allmessageList),
          text,
          author,
          chatId: chatId
        };
        //console.log(obj);
        dispatch({
          type: ADD_MESSAGE,
          payload: obj,
          meta: {
            delay: 2000
          }
        });
    }

    return (
      <ChatPagePresent
        messageList = {messageList}
        addMessage = {addMessage}
        chatId = {chatId}
        setAuthor = {setAuthor}
        author = {author}
        setText = {setText}
        text = {text}
      />
    );
}
export default ChatPage;