import React from 'react';

import { Link } from 'react-router-dom'

const MyPage_U = () => {

    const loginuserEmail = localStorage.getItem("user_email");
    const loginuserNick = localStorage.getItem("user_nick");

  const handleUserUpdate = () => {
    console.log('회원정보수정 버튼이 클릭되었습니다.');
    // 여기에 내 게시글을 보는 로직을 추가하세요.
  };

  const handleViewComments = () => {
    console.log('내 댓글 보기 버튼이 클릭되었습니다.');
    // 여기에 내 댓글을 보는 로직을 추가하세요.
  };
  
  return (
    <div className="my-page">
      <h1 className="my-page-title">마이페이지</h1>
      <div className="my-page-content">
        <h4 className="user-email">이메일: {loginuserEmail}</h4>
        <h4 className="user-nickname">닉네임: {loginuserNick}</h4>
        <div className="my-page-actions">
        <Link to='/update' style={{ textDecoration: "none", color: "black" }}>
          <button className="btn-posts" onClick={handleUserUpdate}>회원정보수정</button>
          </Link>
          <Link to='/commentList' style={{ textDecoration: "none", color: "black" }}>
          <button className="btn-comments" onClick={handleViewComments}>내가 작성한 댓글 보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage_U;