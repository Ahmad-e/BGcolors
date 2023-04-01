import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./start";
import Home from "./home";
import Down from './down'
import './App.css';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <h2 className="header">BG Color</h2>
        <Routes>
          <Route path="/" element={<Start />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
        <Down />
      </BrowserRouter>
    </div>
  );
}

export default App;
