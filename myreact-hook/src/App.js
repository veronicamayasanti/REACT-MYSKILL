import './App.css';
import Counter from './pages/Counter';
import FavoriteColor from './pages/FavoriteColor';
import Form from './pages/Form';
import MultiInputForm from './pages/Multiple';
import Multiple from './pages/Multiple';
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
        {/* <Multiple/> */}
        <MultiInputForm/>
      </header>
    </div>
  );
}

export default App;
