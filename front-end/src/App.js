// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';



function App() {

  const [user_email,setUser_Email] = useState("");
  const [user_pw, setUser_PW] = useState("");
  const [user_nick, setUser_Nick] = useState("");
  const[user_type,setUser_Type] = useState("");
  return (

    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Figure/>} />
      <Route path='/login' element={<Login user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      <Route path='/join' element={<Join user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
