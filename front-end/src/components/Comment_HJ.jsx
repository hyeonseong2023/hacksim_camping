import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Comment_HJ.css'
import Modal from './Modal';
import { useNavigate } from 'react-router-dom';


const Comment_HJ = ({idxnum,setIdxNum}) => {

   //모달기능
   const [modalOpen, setModalOpen] = useState(false);
   const nav = useNavigate();

// 모달창 노출&함수 전달
const [selectedValue, setSelectedValue] = useState(null);
const [content,setContent] = useState('');
const showModal = (e) => {
  const value = e.target.getAttribute("value");
  setContent(e.target.innerText)
  console.log("e.target.value :",e.target.value);
  console.log('클릭모달:', value);
  setSelectedValue(value);
  setModalOpen(true);
};

  const [myCommentList, setMyCommenList] = useState([])
const [innerContent,setInnerContent] = useState();




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

    console.log('클릭 : ', e.target.value);
    let innerIdx = e.target.value;



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

  const commentExist = myCommentList.length != 0;


  return (

<div id='commentTable'>
  <div id='hj_comment'>작성 댓글</div>

  {commentExist ? (
<table  border="1" align='center' width={600}>
  <tbody align='center'>
    <tr>
      <th>글 제목</th>
      <th>내가 작성한 댓글 내용</th>
      <th>댓글 작성일</th>
      <th>댓글 삭제</th>
    </tr>
    {myCommentList.map((item, index) => (
      <tr key={index}>
        <td  onClick={()=>{nav(`/comunity/ContentDetail/${item.story_idx}`)}}>{item.story_title}</td>
        <td style={{cursor:'pointer'}} value={item.cmt_idx} onClick={showModal}>{item.cmt_content}</td>
        <td>{item.cmt_dt}</td>
        <td><button onClick={CommentHandler} value={item.cmt_idx}>삭제</button></td>
        {modalOpen && (
          <Modal
          content={content}
          selectedValue={selectedValue}
          userCommentList={userCommentList}
          innerContent={innerContent}
          setInnerContent={setInnerContent}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          />
        )}
      </tr>
    ))}
  </tbody>
</table>
  ) :(
    <div>작성 댓글이 없습니다</div>
  )}
</div>
);
        }

export default Comment_HJ