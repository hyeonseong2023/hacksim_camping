import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comment_test = () => {

    const [cmt_content, setcmt_Content] = useState('');
    const [comments, setComments] = useState([]);
    const [user_email, setuser_Email] = useState('');
    let {idx} = useParams();
    const loginuserEmail = localStorage.getItem("user_email");
    
    // const user_email = "테스트 중";
    console.log('useremail',user_email);
    console.log(`idx : ${idx}`);

      // 댓글 리스트
      const StoryCommentList = async () =>{
        try{
          axios.get(`http://172.30.1.43:8088/gocamping/comunity/${idx}/comment1`,{story_idx : idx})
          .then((res)=>{

            console.log('리스트 출력 성공');
            console.log(res.data);
            // console.log(response.data[0]);
            setComments(res.data);
          })
          
        }catch(error){
          if(error.response && error.response.status ===401){
            alert('데이터 출력 실패')
          }
        }
      }

  useEffect(()=>{
    StoryCommentList(); //함수 호출 추가
    
  },[])


    //댓글 작성 기능
    const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('cmt_content', cmt_content);
      formData.append('user_email', user_email);

      
      
        axios.post(`http://172.30.1.43:8088/gocamping/comunity/${idx}/comment`, formData,
        {
            headers: {
                'Content-Type' : 'application/json',
            },
        }
        )
        .then((res)=>{
            setcmt_Content("");
            setComments([... comments, res.data]);
            StoryCommentList();
        })
        .catch((error)=>{
            console.log(error);
        })
  
        
        setcmt_Content('');
      
    };


    //댓글 삭제 기능
    const DeleteComment = async (e)=>{
      let formData = {
        // user_email : loginuserEmail
        user_email : "aa@naver.com"
      }
      if(formData.user_email == null || formData.user_email == undefined) {
        formData.userr_email = "";
      }

      console.log("user_email", user_email)
      try{
        const response = await axios.post(`http://172.30.1.43:8088/gocamping/comunity/${e.target.value}/delete`, {user_email : loginuserEmail})
        .then((res)=>{
          StoryCommentList();
        })
      }catch(error){
        if(error){
          console.log(error);
        }
      }
      

    }
    
  
    return (
        <div>
          {comments && comments.map((item)=>(
            <div>
              <p>{item.cmt_idx}</p>
              <p>{item.cmt_content}</p>
              <button value={item.cmt_idx} onClick={DeleteComment}>삭제</button>
            </div>
          ))}
          
          <form onSubmit={handleSubmit} method="post">
            <div>
              <label>댓글 작성:</label>
              <textarea
                id="comment"
                value={cmt_content}
                onChange={(e) => setcmt_Content(e.target.value)}
                rows={3}
              />
            </div>
            <input
              type="text"
              value={user_email}
              onChange={(e) => setuser_Email(e.target.value)}
              placeholder="User email"
            />
    
            <button type="submit" >댓글 작성</button>
          </form>
          <ul>
            {comments > 0 && comments.map((comment, i) => (
              <li key={i}>{comment.comments}</li>
            ))}
          </ul>
        </div>
      );
    };

export default Comment_test