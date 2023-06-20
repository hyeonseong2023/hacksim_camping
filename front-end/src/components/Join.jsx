import React, { useEffect, useRef, useState } from 'react'
import '../Login.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




const Join = ({ user_email, setUser_Email, user_pw, setUser_PW, user_nick, setUser_Nick, user_type, setUser_Type}) => {

  const nav = useNavigate();


//KAKAO 로그인
   
    const REDIRECT_URI = "http://localhost:3000/kakaocallback";
    const REST_API_KEY = 'c7cdf149cf26d90f317204cd9e5a046f';
    // const REST_API_KEY = "3921938e14295e50eea7f9f79b666030"

    const kakaoLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`  


    //카카오 로그인 페이지로 이동
    const kakao_LoginHandler = () => {

        window.location.href = kakaoLink;
    
    }





    // 이메일 중복 확인
    const [result, setResult] = useState('');

    // 중복 이메일 체크
    const handleCheckEmail = (e) => {
        e.preventDefault(); // 기본 동작 방지
        axios
            .get("http://localhost:8088/gocamping/emailcheck", {
                params: {
                    input: user_email,
                },
            })
            .then((response) => {
                const res = response.data;
                console.log("중복확인 : ",response.data);
                setResult(res === 'success' ? '사용 가능한 이메일입니다' : '사용할 수 없는 이메일 입니다');
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
        setUser_Type('P');
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
            user_nick: user_nick,
            user_type: user_type
        };


        //회원가입 데이터를 서버로 전송
        axios.post("/gocamping/join", requestData)
            .then((res) => {
                console.log(res);
                console.log("이메일 = ", requestData.user_email);
                console.log("PW =  ", requestData.user_pw);
                console.log("nick =  ", requestData.user_nick);
                alert(user_email + '님 회원가입을 축하드립니다😉')
                nav("/");
              
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

                 
                        <img id='k' onClick={kakao_LoginHandler} src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' />
                     
                       
                            <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
          
        </div>

    )

}

export default Join