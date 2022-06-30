import {createStore, combineReducers } from "redux";
import {chatReducer} from "./reducers/chatReducer/chatReducer";
import {messageReducer} from "./reducers/messageReducer/messageReducer";

const reducer = combineReducers({
    chats: chatReducer,
    messages: messageReducer
})

export const store = createStore(reducer);