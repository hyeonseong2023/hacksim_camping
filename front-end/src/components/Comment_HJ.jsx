import axios from 'axios';
import React, { useEffect } from 'react'
const Comment_HJ = ({myCommentList}) => {

    const userCommentList = async () => {

        const loginuserEmail = localStorage.getItem("user_email");
          const myCommentList = [];
      
      try {
        const response = await axios.post('/gocamping/mycomment', {user_email : loginuserEmail})
      
        if (response.status === 200) {
            console.log('리스트 출력 성공');
      
           console.log(response.data);
           myCommentList = response.data;
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
            alert("데이터 출력 실패")
      
        }
      }
      
      
      }
      useEffect(() => {
        userCommentList(); // 함수 호출 추가
      }, []);
  return (
    <div></div>
  )
}

export default Comment_HJ