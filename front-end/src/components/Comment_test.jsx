import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comment_test = () => {

    const [cmt_content, setcmt_Content] = useState('');
    const [user_email, setuser_Email] = useState('');
    const [comments, setComments] = useState('');
    let {idx} = useParams();
    // const user_email = "테스트 중";
    console.log('useremail',user_email);
    console.log(`idx : ${idx}`);

      // 댓글 리스트
  useEffect(() => {
    axios
      .get(`http://172.30.1.43:8088/gocamping/comunity/${idx}/comment`)
      .then((res) => {
        setComments(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [idx]);

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
            setComments([...cmt_content, res.data]);
        })
        .catch((error)=>{
            console.log(error);
        })
  
        
        setcmt_Content('');
      
    };
  
    return (
        <div>
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
    
            <button type="submit">댓글 작성</button>
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