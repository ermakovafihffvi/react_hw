//import logo from './logo.svg';
import './css/App.css';
import React, { useEffect } from 'react';

function App() {
  const [ messageList, setMessageList ] = React.useState([]);
  const [ text, setText ] = React.useState('');
  const [ author, setAuthor ] = React.useState('');

  useEffect(() => {
    setTimeout(() => {
      botAnswer()
    }, 2000)
  }, [messageList]);

  function getId(array){
    return array.length ? array[array.length - 1].id + 1 : 0;    
  }

  function botAnswer(){
    let lastAuthor = messageList[messageList.length - 1].author;
    if(lastAuthor){
      setMessageList(prevState => [
        ...prevState,
        {
          id: getId(prevState),
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

  const result = messageList.map(message => {
    return (
      <li key={message.id}>
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
        <div>
          <p>Текст сообщения:</p>
          <input value={text} onChange={(e) => setText(e.target.value)} type="text"></input>
        </div>
        <div>
          <p>Автор:</p>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text"></input>
        </div>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default App;
