import React from 'react';
import './css/message.scss';

function Message(props){
    console.log(props);
    return(
        <div class="text_div">
            <p>{props.textInMessage}</p>
        </div>
    );
}

export default Message;