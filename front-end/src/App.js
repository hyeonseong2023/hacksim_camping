// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';
import KakaoCallBack2 from './components/KakaoCallBack2';
import Mypage from './components/Mypage';
import Header2 from './components/Header2';



function App() {

  const [user_email,setUser_Email] = useState("");
  const [user_pw, setUser_PW] = useState("");
  const [user_nick, setUser_Nick] = useState("");
  const[user_type,setUser_Type] = useState("");

  return (

    <div>
      <Header/>
      <Routes>
      <Route path='/2' element={<Header2/>} />
      <Route path='/' element={<Figure/>} />
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/login' element={<Login user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      <Route path='/join' element={<Join user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW} />} />
      <Route path='/kakaocallback' element={<KakaoCallBack user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      <Route path='/kakaocallback2' element={<KakaoCallBack2 user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
