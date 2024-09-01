
import './App.css';
import { Greetings } from './components/Greetings.jsx'
import { Message } from './components/Message.jsx';
import { Button } from './components/Button.jsx';

function onClick () {
  console.log("Люблю котиків!");
}

function App() {
  return (
    <>
      <Greetings name="Іван"/>
      <Message text="Я люблю яблука"/>
      <Button props={onClick}/>
    </>
  );
}

export default App;
