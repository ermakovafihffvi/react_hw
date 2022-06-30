import { DELETE_CHAT, ADD_CHAT } from "../../actionTypes";

const initialState = {
   chats: [
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
  ]
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        default:
            return state
    }
}