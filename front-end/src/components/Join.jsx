// HJ
import React, { useEffect, useState } from 'react'
import '../Login.css'
import axios from 'axios'
export const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

const Join = ({ user_email, setUser_Email, user_pw, setUser_PW, user_nick, setUser_Nick }) => {

    //     //SNS 로그인 - KAKAO 연동

    const JS_KEY = 'dd382d172dfaf2c763c94fe963356a69'
    const REDIRECT_URL = 'http://localhost:3000/join'
    const kakaoLink = 'https://kauth.kakao.com/oauth/authorize?client_id=0ae55e825a9fa3a77d17cdcb413fcb71&redirect_uri=http://localhost:3000/join&response_type=code'

    //카카오 로그인 페이지로 이동
    const kakao_LoginHandler = () => {
        window.location.href = kakaoLink;

    }
 // 응답코드 받기
    // const code = new URL(window.location.href).searchParams.get("code");

   
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(`http://172.20.10.3:3000/user/signin?code=${code}`, {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/x-www-form-urlencoded;",
    //           },
    //         });

    //         // Handle the response here (e.g., parse JSON, update state, etc.)
    //       } catch (error) {
    //         console.error("Error occurred during fetch:", error);
    //       }
    //     };

    //     fetchData();
    //   }, [code]);

    //   console.log(code); 

     
    //토큰 받기
        useEffect(() => {
            const params = new URL(document.location.toString()).searchParams;
            const code =params.get("code");
            const grant_type = "authorization_code";
            const client_id = "0ae55e825a9fa3a77d17cdcb413fcb71";
            const REDIRECT_URI = 'http://localhost:3000/join';
          
            axios
              .post(
                `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
                {},
                {
                  headers: {
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                }
              )
              .then((res) => {
                console.log(res);
              })
              .catch((error) => {
                console.error("Error occurred during axios request:", error);
              });
          }, []);
    // 카카오 끝






    // 이메일 중복 확인
    const [result, setResult] = useState('');

    // 중복 이메일 체크
=======
import React, { useState } from 'react'
import '../Login.css'
import axios from 'axios'
const Join = ({user_email, setUser_Email, user_pw,setUser_PW,user_nick, setUser_Nick }) => {


    const [result, setResult] = useState('');

// HSeong
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

// HJ
    // 중복 끝

=======
// HSeong
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
// HJ
                alert(user_email + '님 회원가입을 축하드립니다😉')
=======
                alert(user_email+'님 회원가입을 축하드립니다😉')
// HSeong
            })
            .catch(error => {
                console.error(error); // 오류 발생 시 에러 로그를 출력
                alert('회원가입 실패😥')
            });

    };

    return (
// HJ
      
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
=======
        // <div id='container'>
        <div id='login-container'>
            <body>
                <div class="main">
                    <h1 class="logo">회원가입</h1>
                    <div id="login_container">
                        {/* <div id='emailcontainer'> */}
                        <input type="text" value={user_email} onChange={handleUseremailChange}  placeholder="Email" id="id" class="account"></input>
                        

                        {/* 중복 이메일 체크 */}
                        <button type="button" onClick={handleCheckEmail}>중복 확인</button>
                            <div>{result}</div>

                        {/* </div> */}
                        <input type="password" value={user_pw} onChange={handleUserPwChange} placeholder="Password" id="password" class="account" />
                        <button onClick={handleFormSubmit} id="login" class="account">회원가입</button>
                        <p id="alert" class="account"> </p>
                        <hr/>
                        <div id='logintxt_container'>
                        <div id ='login_text'>SNS 회원가입</div>
                        </div>
                        <div id='img_container'>
                        <img id='k' src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' />
                        <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
// HSeong
                        </div>
                    </div>
                </div>
                <script src="script.js"></script>
// HJ
          
        </div>

    )

=======
            </body>
        </div>
        // </div>
    )
// HSeong
}

export default Join