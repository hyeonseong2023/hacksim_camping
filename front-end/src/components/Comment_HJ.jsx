import axios from 'axios';
import React, { useEffect, useState } from 'react'


const Comment_HJ = () => {
 

  const [myCommentList, setMyCommenList] = useState([])

  const userCommentList = async () => {

    const loginuserEmail = localStorage.getItem("user_email");


    try {
      const response = await axios.post('/gocamping/mycomment', { user_email: loginuserEmail })

      if (response.status === 200) {
        console.log('리스트 출력 성공');

        console.log(response.data);
        console.log(response.data[0]);



        setMyCommenList(response.data);
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


  //댓글 삭제 기능
  const CommentHandler = (e) => {
    console.log('클릭 : ', e.target);
    let innerIdx = e.target.value

    axios.post("/gocamping/deletecoment", { cmt_idx: innerIdx })
      .then((res) => {

        alert('댓글이 삭제되었습니다')
        userCommentList();


      })
      .catch(error => {
        console.error(error); // 오류 발생 시 에러 로그를 출력
        alert('댓글 삭제 실패😥')

      });


  }


  return (
    <div>

      <table border="1" align='center' width={600}>
        <tbody align='center'>
          <tr>
            <td>글 제목</td>
            <td>내가 작성한 댓글 내용</td>
            <td>댓글 작성일</td>
            <td>댓글 삭제</td>

          </tr>
          {myCommentList.map((item, index) => (
            <tr key={index} >
              <td>{item.story_title}</td>
              <td>{item.cmt_content}</td>
              <td>{item.cmt_dt}</td>
              <td><button value={item.cmt_idx} onClick={CommentHandler}>삭제</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Comment_HJ