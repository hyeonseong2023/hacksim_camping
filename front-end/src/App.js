// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import Main from './components/Main';

function App() {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNick, setInputNick] = useState("");
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
