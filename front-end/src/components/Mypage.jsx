import React, { useEffect, useState } from 'react'
import '../Mypage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
const Mypage = () => {
  const nav = useNavigate();

  const [myStory, setmyStory] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('loginSuccess') === null) {
      nav('/login')
    }

    const printMyStory = async () => {
      const user_email = (localStorage.getItem('user_email'));
      try {
        const response = await axios.post("/gocamping/mystory", { user_email: user_email })

        if (response.status === 200) {
          console.log(response.data);

          setmyStory(response.data);

        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error(error); // 오류 발생 시 에러 로그를 출력
          alert('데이터로드실패😥')
        }
      }
    };
    printMyStory();
  }, [])



  return (
    <div id='hj_mypage'>
      <div id='hj_user-container'>
        <Link to='/update' style={{ textDecoration: "none", color: "black" }}>
          <div>내 정보 관리</div>
        </Link>
        <Link to='/mypage/mycomment' style={{ textDecoration: "none", color: "black" }}>
          <div id='comentList'>작성 댓글</div>
        </Link>
      </div>
      <hr />
      <div id='hj_columns'>

        <div id='hj_columns'>
          {myStory.map((item, index) => (
            <figure id='hj_columns figure img' key={index}>
              <img src={`http://localhost:8088/gocamping/${item.story_img}`} alt={`Image ${index}`} />
              <figcaption>{item.story_title}</figcaption>
            </figure>
          ))}

        </div>

      </div>


    </div>
  )
}

export default Mypage