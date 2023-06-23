import React, { useState } from "react";
import axios from "axios";


// Update 컴포넌트는 사용자의 비밀번호와 닉네임을 수정하는 기능을 제공합니다.
const Update = () => {

    const loginuserEmail = localStorage.getItem("user_email");
  // newPassword와 newNick 상태는 입력한 수정 비밀번호와 닉네임을 저장합니다.
  const [newPassword, setNewPassword] = useState("");
  const [newNick, setNewNick] = useState("");
    console.log('접속 중인 이메일 : ',loginuserEmail);
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
        user_email : loginuserEmail,
        user_pw: newPassword,
        user_nick: newNick
      };

      // 서버로 회원 정보 수정 요청을 전송합니다.
      axios
        .post("http://localhost:8088/gocamping/update", requestData )
        .then((res) => {
          console.log(res);
          alert("회원 정보 수정 완료");
        })
        .catch((err) => {
          console.error(err);
          alert("회원 정보 수정 실패");
        });
   
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
    </div>
  );
};

export default Update;