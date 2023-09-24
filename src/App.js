import logo from './logo.svg';
import './App.css';
import { database } from './Firebase/Config';
import { Routes,Route } from 'react-router-dom';
import Auth from './Components/Auth';
import Expense from './Components/Expense';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Auth/>} />
      <Route path='/expense' element={<Expense/>} />
    </Routes>
    
  );
}

export default App;
