import { ADD_MESSAGE } from "../../actionTypes";
const initialState = {
    messages: [
        {
            id: 1,
            text: 'Hello world!',
            author: 'Me',
            chatId: 1
        }, 
        {
            id: 2,
            text: 'Hi!',
            author: 'World',
            chatId: 2
        },
    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            console.log('adding message');
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}