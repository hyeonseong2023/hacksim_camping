import React, { useState } from 'react'
import '../Header.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Header = ({world,setWorld,searchList,setSearchList}) => {
 
  const nav = useNavigate();

  const clickSearch = ()=>{
    console.log('클릭');
  const handleSearch = async () => {
      console.log(world);
    try {
        const response = await axios.post("/gocamping/search", {story_content : world})

        if (response.status === 200) {
          console.log(response.data.length);
          console.log(response.data);
      
          setSearchList(response.data);

          nav('/searchpage');
            
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error(error); // 오류 발생 시 에러 로그를 출력
          alert('데이터로드실패😥')
        }
    }
  };

  

  handleSearch();
}
  return (

    <div className='header_container'>

        <Link to='/' style={{ textDecoration: "none", color: "black" }}>

          <div id='logo'>메인페이지</div>

        </Link>

      <div id='search_container'>
        <div id="search">
          <input type="text" value={world} onChange={(e)=>{setWorld(e.target.value); console.log(world);}} placeholder="검색어 입력" />
          <img onClick={clickSearch} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </div>
      </div>
      <Link to='/mypage' style={{ textDecoration: "none", color: "black" }}>
      <div id='mypage'>마이페이지</div>
      </Link>
     <Link to='/searchpage' style={{ textDecoration: "none", color: "black" }}>
      <div id='content'>게시판</div>
      </Link>
      <Link to='/login' style={{ textDecoration: "none", color: "black" }}>
      <div id='login'>로그인</div>
      </Link>
      <Link to='/logout' style={{ textDecoration: "none", color: "black" }}>
      <div id='login'>로그아웃</div>
      </Link>

  
      
      <Link to='/join' style={{ textDecoration: "none", color: "black" }}>
        <div id='join'>회원가입</div>
      </Link>
    </div>

  )
}

export default Header
