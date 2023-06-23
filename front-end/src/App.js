
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

import { Routes , Route } from 'react-router-dom'
import MainList from './components/MainList';

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




function App() {


  
  // const formData = new FormData();



  // useEffect(()=>{
  // axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
  // .then((res)=>{
  //   console.log('결과',res.data);
  //   })
  // },[])


//   useEffect(()=>{
//   axios.post("http://172.30.1.43:8088/gocamping/comunity/write",
//   // formData,
//   // { 
//   //   headers:{"Content-Type" : "multipart/form-data"}
//   // }
// )
//   .then((res)=>{
//     console.log('결과',res.data);
//     })
//   },[])
// useEffect(() => {
//   const formData = new FormData();
//   formData.append('imageUrl', selectedFile);

//   axios
//     .post('http://172.30.1.43:8088/gocamping/comunity/write', formData)
//     .then((res) => {
//       console.log('결과', res.data);
//     })
//     .catch((error) => {
//       console.error('에러', error);
//     });
// }, []);


  

//   return (


//     <div>
//       <Header />
//       <Routes>
      
//         <Route path='/' element={<Figure /> } />
//         <Route path='/write1' element={<Write />} />
//       </Routes>

//       <Footer />

//     </div>

//   );
// }function App() {
  
  const [inputTitle, setInputTitle] = useState("");
  const [inputUserEmail, setInputUserEmail] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [comunity, setComunity] = useState([]);


  const [user_email,setUser_Email] = useState("");
  const [user_pw, setUser_PW] = useState("");
  const [user_nick, setUser_Nick] = useState("");
  const[user_type,setUser_Type] = useState("");

  


  return (

    <div>
      <Header />
      <Routes>


        <Route path="/" element={<Figure />} />
        {/* <Route path="/write1" element={<Write inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} /> */}
        <Route path="/write1" element={<Write_Test inputTitle={inputTitle} setInputTitle={setInputTitle} inputUserEmail={inputUserEmail} setInputUserEmail={setInputUserEmail} inputContent={inputContent} setInputContent={setInputContent}/>} />
        <Route path='/main' element={<MainList comunity={comunity} setComunity={setComunity}/>}/>
        <Route path="/comunity/ContentDeatil/:idx" element={<ContentDetail tableMarginTB={0} tableWidth={"100%"} contentImgWidth={"45%"} contentImgHeight={"80%"} comunity={comunity} setComunity={setComunity}/>} />

      
        {/* <Route path='/' element={<Figure /> } />
        <Route path='/write1' element={<Write />} />
        <Route path="/comunity" element={<SyLoadBoardList /> }/> */}

        
      
      {/* <Route path='/ComunityDetail/:num' element={<ComunityDetail comunity={comunity}/>}></Route> */}



      <Route path='/' element={<Figure/>} />
      <Route path='/mycomment' element={<Comment_HJ/>} />
      <Route path='/logout' element={<Logout/>} />
      <Route path='/mypage' element={<Mypage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<Join/>} />
      <Route path='/kakaocallback' element={<KakaoCallBack/>}/>
      <Route path='/kakaocallback2' element={<KakaoCallBack2/>}/>
           {/* 여기부터~~ */}
           <Route path='/mypage_U' element={<Mypage_U/>} />

      <Route path='/update' element={<Update/>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;