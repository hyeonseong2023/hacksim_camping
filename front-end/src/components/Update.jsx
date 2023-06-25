import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";



// Update 컴포넌트는 사용자의 비밀번호와 닉네임을 수정하는 기능을 제공합니다.
const Update = () => {


  const loginuserEmail = localStorage.getItem("user_email");
  // newPassword와 newNick 상태는 입력한 수정 비밀번호와 닉네임을 저장합니다.
  const [newPassword, setNewPassword] = useState("");
  const [newNick, setNewNick] = useState("");
  console.log('접속 중인 이메일 : ', loginuserEmail);

  // handlePasswordChange 함수는 비밀번호 입력 필드의 값을 변경할 때 호출됩니다.
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // handleNickChange 함수는 닉네임 입력 필드의 값을 변경할 때 호출됩니다.
  const handleNickChange = (e) => {
    setNewNick(e.target.value);
  };

  // handleUpdateSubmit 함수는 "정보 수정 완료" 버튼을 클릭했을 때 호출됩니다.
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();



    const requestData = {
      user_email: loginuserEmail,
      user_pw: newPassword,
      user_nick: newNick
    };

    // 서버로 회원 정보 수정 요청을 전송합니다.
    axios
      .post("http://localhost:8088/gocamping/update", requestData)
      .then((res) => {
        console.log(res);
        alert("회원 정보 수정 완료");
      })
      .catch((err) => {
        console.error(err);
        alert("회원 정보 수정 실패");
      });

  };

  // 회원탈퇴~
  const navigate = useNavigate();

  const handleDelete = async () => {
    const userEmail = localStorage.getItem("user_email");
    const userPw = localStorage.getItem("user_pw");

    const user = {
      user_email: userEmail,
      user_pw: userPw,
    };

    try {
      const response = await axios.post("/gocamping/delete", user);

      if (response.status === 200) {
        localStorage.removeItem("loginSuccess");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_pw");
        localStorage.removeItem("user_nick");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_joindate");
        alert("회원 탈퇴가 완료되었습니다.");
        navigate("/");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("회원 탈퇴에 실패했습니다.");
      }
    }

  };

  return (
    <div>
      {/* 비밀번호 입력 필드 */}
      <input
        type="password"
        placeholder="새 비밀번호 입력"
        onChange={handlePasswordChange}
      />
      {/* 닉네임 입력 필드 */}
      <input
        type="text"
        placeholder="새 닉네임 입력"
        onChange={handleNickChange}
      />
      {/* 수정 버튼 */}
      <button onClick={handleUpdateSubmit}>정보 수정 완료</button>

      <button onClick={handleDelete}>회원 탈퇴</button>

    </div>
  );
};

export default Update;