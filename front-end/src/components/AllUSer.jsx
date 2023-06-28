// 필요한 모듈들을 가져옵니다.
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../AllUser.css';

// AllUser라는 컴포넌트를 생성합니다.
const AllUser = () => {
  // 상태 생성: users를 위한 상태를 생성합니다. 초기값은 빈 배열입니다.
  const [users, setUsers] = useState([]);

  // useEffect를 사용해 컴포넌트 마운트 시에 데이터를 가져옵니다.
  useEffect(() => {
    fetchAllUser();
  }, []);

  // 모든 회원 정보를 서버로부터 가져오는 비동기 함수입니다.
  const fetchAllUser = async () => {
    try {
      const response = await axios.post("/gocamping/allUser");
      setUsers(response.data); // 가져온 데이터를 users 상태에 저장합니다.
    } catch (error) {
      console.error("회원 정보 출력 실패", error);
    }
  };

  // 회원 정보를 삭제하는 비동기 함수입니다.
  const handleDelete = async (user_email) => {
    try {
      // 회원 정보 삭제 요청을 서버에 전달합니다.
      const response = await axios.post(
        "/gocamping/deleteUser", 
        { user_email }, 
        {
          headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      fetchAllUser(); // 삭제 후, 전체 회원 정보를 다시 불러옵니다.
    } catch (error) {
      console.error("회원 정보 삭제 실패", error);
    }
  };

  // UI를 렌더링합니다.
  // UI를 렌더링합니다.
  return (
    <>
      <h1>모든 회원 정보</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="center-align">이메일</th>
            <th className="center-align">비밀번호</th>
            <th className="center-align">닉네임</th>
            <th className="center-align">역할</th>
            <th className="center-align">가입일</th>
            <th className="center-align">타입</th>
            <th className="center-align">삭제</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="right-align">{user.user_email}</td>
              <td className="right-align">{user.user_pw}</td>
              <td className="right-align">{user.user_nick}</td>
              <td className="center-align">{user.user_role}</td>
              <td className="right-align">{user.user_joindate}</td>
              <td className="center-align">{user.user_type}</td>
              <td className="center-align">
                <button className="deleteBtn" onClick={() => handleDelete(user.user_email)}>
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );


};

// AllUser 컴포넌트를 export합니다.
export default AllUser;
