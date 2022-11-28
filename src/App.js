import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './containers/navbar/Navbar';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
