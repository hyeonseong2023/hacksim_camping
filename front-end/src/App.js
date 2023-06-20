// import './App.css';
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './components/Join';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';
import Mypage_U from './components/Mypage_U';
import Comment from './components/Comment';



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
      <Route path='/kakaocallback' element={<KakaoCallBack user_type={user_type} setUser_Type={setUser_Type} user_nick={user_nick} setUser_Nick={setUser_Nick} user_email={user_email} setUser_Email={setUser_Email} user_pw={user_pw} setUser_PW={setUser_PW}/>}/>
      {/* 여기부터~~ */}
      <Route path='/mypage_U' element={<Mypage_U/>} />
      <Route path='/comment' element={<Comment/>} />
      {/* 여기까지~~ */}
      </Routes>
      <Footer />

    </div>

  );
}

export default App;
