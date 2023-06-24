import React from 'react'
import '../Header.css'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (

    <div className='header_container'>

        <Link to='/' style={{ textDecoration: "none", color: "black" }}>
          <div id='logo'>메인페이지</div>
        </Link>

      <div id='search_container'>
        <div id="search">
          <input type="text" placeholder="검색어 입력" />
          <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
        </div>
      </div>
      <Link to='/mypage' style={{ textDecoration: "none", color: "black" }}>
      <div id='mypage'>마이페이지</div>
      </Link>
      <div id='content'>게시판</div>
      <Link to='/login' style={{ textDecoration: "none", color: "black" }}>
      </Link>


    </div>

  )
}

export default Header2
