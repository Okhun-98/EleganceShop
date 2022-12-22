import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './containers/navbar/Navbar';
import { Context } from './context/Context';
import { Router } from './router/Router';

function App() {
  const [valueBasket, setValueBasket] = useState([])
  return (
    <Context.Provider value={{ valueBasket, setValueBasket }} >
      <BrowserRouter>
        <Navbar />
        <div className='app'>
          <Router />
        </div>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
