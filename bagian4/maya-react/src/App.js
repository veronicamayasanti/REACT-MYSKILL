import logo from './logo.svg';
import './App.css';
import Title from './title';
import Body from './Body';
import Header from './Header';
import Change from './change';
import ChatBox from './Chat';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Title></Title>
      <Body></Body>
      <Header></Header>
      <Change></Change>
      <ChatBox/>
      </header>
    </div>
  );
}

export default App;
