import {createStore, combineReducers, applyMiddleware } from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messageReducer/messageReducer";
//https://github.com/LogRocket/redux-logger
import { createLogger } from 'redux-logger';

const logger = createLogger();

const addDelay = store => next => action => {
    const delay = action?.meta?.delay;
    if(!delay){
        return next(action);
    }
    console.log('sending message...');
    const timeOut = setTimeout(() => {
        next(action)
    }, delay);
    return () => {
        clearTimeout(timeOut);
    }
}

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

export const store = createStore(reducer, applyMiddleware(addDelay, logger));