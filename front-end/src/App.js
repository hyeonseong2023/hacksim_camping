
import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';
import Write_Test from './components/Write_Test'
import { useState, useEffect } from 'react';
import Write from './components/Write';
import ContentDetail from './components/ContentDetail';
import SyLoadBoardList from './components/SyLoadBoardList';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import MainList from './components/MainList';
import SearchPage from './components/SearchPage';
import Join from './components/Join';
import Login from './components/Login';
import KakaoCallBack from './components/KakaoCallBack';
import KakaoCallBack2 from './components/KakaoCallBack2';
import Mypage from './components/Mypage';
import Update from './components/Update';
import Comment_HJ from './components/Comment_HJ';
import MyPage_A from './components/MyPage_A';
import AllUser from './components/AllUSer';
import AllStory from './components/AllStory';
import Search from './components/Search';
import StoryList from './components/StoryList';
import BestList from './components/BestList';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  //댓글수정-모달창
  const [idxnum,setIdxNum] = useState('');

  //검색기능 props 정의
  const [searchList, setSearchList] = useState([])
  const [searchDataLength, setSearchDataLength] = useState('');
  const [world, setWorld] = useState('');


  //회원가입,로그인 props 정의
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [comunity, setComunity] = useState([]);


  const [inputTitle, setInputTitle] = useState("");

  const onSuccessHandler = res => {
    console.log(res)
  }

  return (

    <div>
      <Header world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} />

      <Routes>
        <Route path="/" element={<Figure />} />

        {/* 검색기능용 게시판*/}
        <Route path='/searchpage' element={<SearchPage world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} />} />

        {/* 내가 작성한 댓글 관리 - 마이페이지와 연동 */}
        <Route path='/mycomment' element={<Comment_HJ idxnum={idxnum} setIdxNum={setIdxNum}/>} />
        <Route path='/mypage' element={<Mypage />} />

        {/* 회원가입 */}
        <Route path='/join' element={<Join />} />

        {/* 로그인 */}
        <Route path='/login' element={<Login />} />

        {/* 회원가입 카카오 콜백 함수 */}
        <Route path='/kakaocallback' element={<KakaoCallBack />} />

        {/* 로그인 카카오 콜백 함수 */}
        <Route path='/kakaocallback2' element={<KakaoCallBack2 />} />

        {/* 게시판 */}
        <Route path='/bestList' element={<BestList />} />
        <Route path='/storyList' element={<StoryList />} />
        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent} />} />
        <Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity} />} />

        {/* 관리자용 마이 페이지 */}
        <Route path='/mypage_A' element={<MyPage_A />} />
        <Route path='/allUser' element={<AllUser />} />
        <Route path='/allstory' element={<AllStory />} />

        {/* 내 정보 관리 - 마이페이지와 연동 */}
        <Route path='/update' element={<Update />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
