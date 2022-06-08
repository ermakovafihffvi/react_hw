//import logo from './img/logo.svg';
import './css/App.css';
import Message from './Message.js';

function App() {
  const text = "Привет мир!";
  return (
    <div className="App">
      <Message textInMessage={text}/>
    </div>
  );
}

export default App;
