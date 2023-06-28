import React from 'react'
import { Link } from 'react-router-dom'



const MyPage_A = () => {
  return (
    <div>

      <Link to='/allUser' style={{ textDecoration: "none", color: "black" }}>
        <div>모든 회원 관리</div>
      </Link>
      <Link to='/allStory' style={{ textDecoration: "none", color: "black" }}>
        <div>모든 게시글 관리</div>
      </Link>

    </div>
  );
};


export default MyPage_A;