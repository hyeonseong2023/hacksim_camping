import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Routes, Route, Router } from "react-router-dom";
import Login from './components/Login';
import Login02 from './components/Login02';
import { useState } from 'react';
import Join from '../../front-end/src/components/Join';
function App() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNick, setInputNick]= useState("");
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login inputEmail={inputEmail} setInputEmail={setInputEmail} inputPw={inputPw} setInputPw={setInputPw} />}></Route>
        <Route path='/join' element={<Join inputNick={inputNick} setInputNick={setInputNick} inputEmail={inputEmail} setInputEmail={setInputEmail} inputPw={inputPw} setInputPw={setInputPw} />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
