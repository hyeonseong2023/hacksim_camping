import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, Router } from "react-router-dom";
import Login from './components/Login';
import Login02 from './components/Login02';
import { useState } from 'react';
function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNick, setInputNick]= useState("");
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/join' element={<Login02 />}></Route>
        <Route path='/login' element={<Login02 inputNick={inputNick} setInputNick={setInputNick} inputEmail={inputEmail} setInputEmail={setInputEmail} inputPw={inputPw} setInputPw={setInputPw} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
