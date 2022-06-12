//import logo from './logo.svg';
import './css/App.css';
import React from 'react';

function App() {
  const [ messageList, setMessageList ] = React.useState([
    {
      text: "ldkndskfsnd",
      author: "x,v,dsvv,n"
    }
  ]);

  const updateMessages = () => {
    setMessageList([
      ...messageList, 
      {
        text: "new message",
        author: "me"
      }
    ]);
  }

  const result = messageList.map(message => {
    return (
      <li key={message.author}>
        <h3>Author: {message.author}</h3>
        <p>Text: {message.text}</p>
      </li>
    )
  })

  return (
    <div className="App">
      <ul>
        {result}
      </ul>

      <form onSubmit={updateMessages}>
        <input name="text" type="text"></input>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );

  /*const [counter, setCounter] = React.useState(0);
  const increase = () => {
    setCounter(counter => counter+1)
  }
  return(
    <div className='App'>    
      <button onClick={increase}>+</button>
      <p>{counter}</p>
    </div>
  );*/
}

export default App;
