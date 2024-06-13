import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Sign from './components/Sign';
import Add from './components/Add';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Sign" element={<Sign/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/View" element={<View/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
