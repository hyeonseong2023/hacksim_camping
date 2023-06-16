// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';


function App() {

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputNick, setInputNick] = useState("");
  return (

    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Figure/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join inputNick={inputNick} setInputNick={setInputNick} inputEmail={inputEmail} setInputEmail={setInputEmail} inputPw={inputPw} setInputPw={setInputPw} />} />
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
