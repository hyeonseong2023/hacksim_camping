
// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';


// import Write from './components/Write';
import Write_Test from './components/Write_Test'
import { useState, useEffect } from 'react';

import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';

import axios from 'axios'

import { Routes , Route } from 'react-router-dom'
import MainList from './components/MainList';

import Join from './components/Join';

import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';

import KakaoCallBack2 from './components/KakaoCallBack2';
import Mypage from './components/Mypage';


import Logout from './components/Logout';
import MyPage_U from './components/Mypage_U';
import CommentList from './components/CommentList';
import Update from './components/Update';
import Comment_HJ from './components/Comment_HJ';




function App() {
 

  
  const [inputTitle, setInputTitle] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [comunity, setComunity] = useState([]);




  return (

    <div>
      <Header />
      <Routes>


        <Route path="/" element={<Figure />} />
        {/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} />
        <Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity}/>}/>


      


      <Route path='/' element={<Figure/>} />
      {/* 내가 단 댓글목록 */}
      <Route path='/mycomment' element={<Comment_HJ/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join/>} />
      <Route path='/kakaocallback' element={<KakaoCallBack/>}/>
      <Route path='/kakaocallback2' element={<KakaoCallBack2/>}/>
           {/* 여기부터~~ */}
           <Route path='/mypage_U' element={<MyPage_U/>} />
      <Route path='/commentList' element={<CommentList/>} />
      <Route path='/update' element={<Update/>} />
      {/* 여기까지~~ */}

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
