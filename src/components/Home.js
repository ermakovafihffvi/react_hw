//import logo from './logo.svg';
import '../css/App.css';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

import { getChats } from "../redux/reducers/chatReducer/chatSelector";
import {useDispatch, useSelector} from "react-redux";
import { ADD_CHAT, DELETE_CHAT } from "../redux/actionTypes";

import {getId} from "./getId.js";

import HomePagePresent from './HomePagePresent';

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
      id: getId(chatList),
      name: name
    };
    dispatch({
      type: ADD_CHAT,
      payload: obj
    });
  }


  return (
    <HomePagePresent
      dense = {dense}
      name = {name}
      setName = {setName}
      chatList = {chatList}
      deleteChat = {deleteChat}
      handleChange = {handleChange}
      addChat = {addChat}
    />
  );
}

export default Home;