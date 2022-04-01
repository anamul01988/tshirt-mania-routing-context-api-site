import { Route, Routes } from 'react-router-dom';
import './App.css';
import Context from './components/Context/Context';
import Grandpa from './components/ContextApi/Grandpa/Grandpa';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderItems from './OrderItems/OrderItems';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/review" element={<OrderItems />} />
        <Route path="/context" element={<Context/>} />
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      </Routes>

    </div>
    
  );
}

export default App;
