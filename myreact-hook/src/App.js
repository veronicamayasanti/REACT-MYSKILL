import './App.css';
import Counter from './pages/Counter';
import FavoriteColor from './pages/FavoriteColor';
import Timers from './pages/Timer';

function App() {
  return (
    <div className="App">
      <header>
        <FavoriteColor />
        <Timers />
        <Counter/>
      </header>
    </div>
  );
}

export default App;
