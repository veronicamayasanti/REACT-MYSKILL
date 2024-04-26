import logo from './logo.svg';
import './App.css';
import Title from './title';
import Body from './Body';
import Header from './Header';
import Change from './change';
import ChatBox from './Chat';
import Product from './product';
import FootBall from './football';
import Pesanan from './pesanan';
import Goal from './goal';
import Garasi from './garasi';
import Garage from './mobil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';


const phoneData = [
  { name: "oppo", price: 3000000, discont: 30 },
  { name: "oppo A1", price: 3000000, discont: 60 },
  { name: "oppo A32", price: 4300000, discont: 54 },
  { name: "oppo Y65", price: 5400000, discont: 89 },
  { name: "oppo C54", price: 6700000, discont: 70 }
]

const mobil = ['honda', 'ford', 'bmw', 'calya'];

function MyComponent() {
  return (
    <div>
      <button> {1 + 2}</button>
      <br />
      <button> {Date.now()}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title></Title>
      </header>
      <Body></Body>
      <Header></Header>
      <Change></Change>
      <ChatBox />
      <MyComponent />
      {phoneData.map((phone, id) => (
        <Product key={id}
          name={phone.name}
          price={phone.price}
          discont={phone.discont}></Product>
      ))}
      <FootBall />
      <Pesanan />
      <br></br>
      <Goal isGoal={true} />
      <Garasi mobil={mobil} />
      <Garage />

      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}/>
          <Route index element={<Home />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
