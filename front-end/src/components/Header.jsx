import React, { useState } from 'react'
import '../Header.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Header = ({ world, setWorld, searchList, setSearchList }) => {


  //게시글 검색 기능
  const nav = useNavigate();

  const clickSearch = () => {
    console.log('클릭');
    const handleSearch = async () => {
      console.log(world);
      try {
        const response = await axios.post("/gocamping/search", { story_content: world })

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

  // ~ 게시글 검색 기능

  // 로그아웃 기능
  const isLoggedIn = localStorage.getItem("loginSuccess") === "Y";
  const user_role = localStorage.getItem("user_role");

  const handleLogout = () => {
    localStorage.removeItem("loginSuccess");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_pw");
    localStorage.removeItem("user_nick");
    localStorage.removeItem("user_role");
    localStorage.removeItem("user_joindate");
    nav("/");
    window.location.reload();
  };

  return (
    <div className="header_container">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div id="logo">메인페이지</div>
      </Link>

      <div id="search_container">
        <div id="search">
          <input type="text" value={world} onChange={(e) => { setWorld(e.target.value); console.log(world); }} placeholder="검색어 입력" />
          <img onClick={clickSearch} src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </div>
      </div>

      {isLoggedIn ? (
        <>
          <div id="mypages">
            <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
              <div id="content">마이페이지</div>
            </Link>
            {user_role === "A" && (
              <Link to="/mypage_A" style={{ textDecoration: "none", color: "black" }}>
                <div id="content">관리자페이지</div>
              </Link>
            )}
          </div>
          <Link to="/bestList" style={{ textDecoration: "none", color: "black" }}>
            <div id="content">게시판</div>
          </Link>
          <Link to='/searchpage' style={{ textDecoration: "none", color: "black" }}>
           {/* <div id='content'>게시판_HJ</div> */}
          </Link>
          <div id="logout" onClick={handleLogout}>로그아웃</div>
        </>
      ) : (
        <>
          <Link to="/bestList" style={{ textDecoration: "none", color: "black" }}>
            <div id="content">게시판</div>
          </Link>
          <Link to='/searchpage' style={{ textDecoration: "none", color: "black" }}>
            {/* <div id='content'>게시판_HJ</div> */}
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <div id="login">로그인</div>
          </Link>
          <Link to="/join" style={{ textDecoration: "none", color: "black" }}>
            <div id="join">회원가입</div>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
