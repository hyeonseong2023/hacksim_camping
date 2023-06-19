import React, { useEffect, useState } from 'react'
import '../Login.css'
import axios from 'axios'


const Join = ({ user_email, setUser_Email, user_pw, setUser_PW, user_nick, setUser_Nick }) => {

   
   
    // 이메일 중복 확인
    const [result, setResult] = useState('');

    // 중복 이메일 체크
    const handleCheckEmail = (e) => {
        e.preventDefault(); // 기본 동작 방지
        axios
            .get("http://localhost:8082/gocamping/emailcheck", {
                params: {
                    input: user_email,
                },
            })
            .then((response) => {
                const res = response.data;
                setResult(res === 'success' ? '존재하는 이메일입니다.' : '존재하지 않는 이메일입니다.');
            })
            .catch((error) => {
                console.error(error);
                setResult('통신 실패!');
            });
    };

    // 중복 끝

    const handleUseremailChange = (e) => {
        setUser_Email(e.target.value);
        console.log(e.target.value);
        setUser_Nick(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setUser_PW(e.target.value);
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();

        const requestData = {
            user_email: user_email,
            user_pw: user_pw,
            user_nick: user_nick
        };


        //회원가입 데이터를 서버로 전송
        axios.post("/gocamping/join", requestData)
            .then((res) => {
                console.log(res);
                console.log("이메일 = ", requestData.user_email);
                console.log("PW =  ", requestData.user_pw);
                console.log("nick =  ", requestData.user_nick);
                alert(user_email + '님 회원가입을 축하드립니다😉')
            })
            .catch(error => {
                console.error(error); // 오류 발생 시 에러 로그를 출력
                alert('회원가입 실패😥')
            });

    };

    return (
      
        <div id='login-container'>
           
                <div className="main">
                    <h1 className="logo">회원가입</h1>
                    <div id="login_container">
                        <div id='emailcontainer'>
                            <input type="text" value={user_email} onChange={handleUseremailChange} placeholder="Email" id="id" className="account"></input>
                            <button className="underline-btn" onClick={handleCheckEmail}>중복확인</button>
                            <div>{result}</div>
                        </div>
                        <input type="password" value={user_pw} onChange={handleUserPwChange} placeholder="Password" id="password" className="account" />
                        <button onClick={handleFormSubmit} id="login" className="account">회원가입</button>
                        <p id="alert" className="account"> </p>
                        <hr />
                        <div id='logintxt_container'>
                            <div id='login_text'>SNS 회원가입</div>
                        </div>
                        <div id='img_container'>

                            {/* <img id='k' onClick={kakao_LoginHandler} src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' /> */}
                            <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
          
        </div>

    )

}

export default Join