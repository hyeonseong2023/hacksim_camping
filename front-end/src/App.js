

// import './App.css';

// import { BrowserRouter, Route , Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav'


import Figure from './components/Figure';
import Header from './components/Header';
import Footer from './components/Footer';

import Header2 from './components/Header2';
import Comment_HJ from './components/Comment_HJ';
// import Write from './components/Write';

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



import Mypage_U from './components/Mypage_U';
import Comment from './components/Comment';
import ComunityDetail from './components/ComunityDetail';
import Item from './components/Item';
import Logout from './components/Logout';
import Update from './components/Update.jsx';

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

        //검색기능 props 정의
        const [searchList, setSearchList] = useState([])
        const [searchDataLength, setSearchDataLength] = useState('');
        const [world, setWorld] = useState('');


        //회원가입,로그인 props 정의
        const [inputUserEmail, setInputUserEmail] = useState("");
        const [inputContent, setInputContent] = useState("");
        const [comunity, setComunity] = useState([]);


        const [inputTitle, setInputTitle] = useState("");



return(
	<div>
		<Header />
                <Header world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} />
		<Routes>


			<Route path="/" element={<Figure />} />
			{/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
			<Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent} />} />
			<Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity} />} />
			<Route path="/comunity/ContentDeatil/:idx" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} comunity={comunity} setComunity={setComunity} />} />
			<Route path="/comunity/contentDetail" element={<SyLoadBoardList />} />
                        <Route path='/searchpage' element={<SearchPage world={world} setWorld={setWorld} searchList={searchList} setSearchList={setSearchList} />} />
			<Route path='/write' element={<Write/>}/>
			<Route path='/comment' element={<Comment />} />
			{/* <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />
        <Route path="/comunity" element={<SyLoadBoardList /> }/> */}


        


			{/* <Route path='/ComunityDetail/:num' element={<ComunityDetail comunity={comunity}/>}></Route> */}





			<Route path='/mycomment' element={<Comment_HJ />} />
			<Route path='/logout' element={<Logout />} />
			<Route path='/mypage' element={<Mypage />} />
			<Route path='/login' element={<Login />} />
			<Route path='/join' element={<Join />} />
			<Route path='/kakaocallback' element={<KakaoCallBack />} />
			<Route path='/kakaocallback2' element={<KakaoCallBack2 />} />
			{/* 여기부터~~ */}
			<Route path='/mypage_U' element={<Mypage_U />} />

			<Route path='/update' element={<Update />} />

                         {/* 게시판 */}
                        <Route path='/bestList' element={<BestList />} />
                        <Route path='/storyList' element={<StoryList />} />
                

                        {/* 관리자용 마이 페이지 */}
                        <Route path='/mypage_A' element={<MyPage_A />} />
                        <Route path='/allUser' element={<AllUser />} />
                        <Route path='/allstory' element={<AllStory />} />
			{/* 여기까지~~ */}
			</Routes>

                        
		</div>

)

       

        {/* 내 정보 관리 - 마이페이지와 연동 */}
        



}

export default App;