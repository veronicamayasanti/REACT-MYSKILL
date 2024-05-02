import './App.css';
import Counter from './pages/Counter';
import DropDwon from './pages/DropDwon';
import FavoriteColor from './pages/FavoriteColor';
import Form from './pages/Form';
import MultiInputForm from './pages/Multiple';
import Multiple from './pages/Multiple';
import TextArea from './pages/TextArea';
import Timers from './pages/Timer';

function App() {
  return (
    <div className="App">
      <header>
        <FavoriteColor />
        <Timers />
        <Counter/>
        <Form/>
        <br/>
        <Multiple/>
        <MultiInputForm/>
        <TextArea/>
        <DropDwon/>
      </header>
    </div>
  );
}

export default App;
