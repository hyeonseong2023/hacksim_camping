import React from 'react';
import '../mypage_U.css';
import { Link } from 'react-router-dom'

const MyPage_U = () => {
  const userEmail = 'your.email@example.com'; // 가입된 이메일
  const userNickname = 'nickname'; // 닉네임
  
  const handleViewPosts = () => {
    console.log('내 게시글 보기 버튼이 클릭되었습니다.');
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
        <h4 className="user-email">이메일: {userEmail}</h4>
        <h4 className="user-nickname">닉네임: {userNickname}</h4>
        <div className="my-page-actions">
          <button className="btn-posts" onClick={handleViewPosts}>내가 작성한 게시글 보기</button>
          <Link to='/comment' style={{ textDecoration: "none", color: "black" }}>
          <button className="btn-comments" onClick={handleViewComments}>내가 작성한 댓글 보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyPage_U;
