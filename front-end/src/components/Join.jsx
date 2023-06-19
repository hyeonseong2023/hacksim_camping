import React, { useEffect, useState } from 'react'
import '../Join.css'
import axios from 'axios'
const Join = ({ inputEmail, setInputEmail, inputPw, setInputPw, inputNick, setInputNick }) => {

    // const [isEmailDuplicate, setIsEmailDuplicate] = useState(null);

    const [result, setResult] = useState('');

    const handleUseremailChange = (e) => {
        setInputEmail(e.target.value);
        console.log(e.target.value);
        setInputNick(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setInputPw(e.target.value);
    }



    // const handleEmailCheck = () => {
    //     axios
    //         .post("http://localhost:8080/email-check", { email: inputEmail }) // Replace with the actual URL of your backend server
    //         .then((res) => {
    //             setIsEmailDuplicate(res.data);
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // };

    // 중복 이메일 체크
    const handleCheckEmail = (e) => {
        e.preventDefault(); // 기본 동작 방지
        axios
            .get("http://localhost:8082/gocamping/emailcheck", {
                params: {
                    input: inputEmail,
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
    

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const requestData = {
            inputEmail: inputEmail,
            inputPw: inputPw,
            inputNick: inputNick
        };




        //회원가입 데이터를 서버로 전송
        axios.post("http://localhost:8082/gocamping/join", requestData)
            .then((res) => {
                console.log(res);
                console.log("이메일 = ", requestData.inputEmail);
                console.log("PW =  ", requestData.inputPw);
                console.log("nick =  ", requestData.inputNick);
                alert('데이터 전송 성공')
            })
            .catch(error => {
                console.error(error); // 오류 발생 시 에러 로그를 출력
                alert('데이터 전송 실패')
            });

    };






    return (
        <div>
            <div className='container'>
                <div className='body'>
                    <div id="main-holder">
                        <h1 id="login-header">Login</h1>
                        <div id="logo-container">
                            <img id='k' src='https://cdn-icons-png.flaticon.com/512/2111/2111496.png' />
                            <img id='g' src='https://img.uxwing.com/wp-content/themes/uxwing/download/brands-social-media/google-icon.png' />
                        </div>
                        <div>SNS 로그인</div>
                        <div id="login-error-msg-holder">
                            <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
                        </div>

                        {/* 회원가입 폼 */}

                        <form id="login-form" onSubmit={handleFormSubmit}>
                            <input type="text" value={inputEmail} onChange={handleUseremailChange} name="useremail" id="useremail-field" className="login-form-field" placeholder="E-mail" />

                            {/* 중복 이메일 체크 */}
                            <button type="button" onClick={handleCheckEmail}>중복 확인</button>
                            <div>{result}</div>

                            <input type="text" value={inputPw} onChange={handleUserPwChange} name="userpassword" id="password-field" className="login-form-field" placeholder="Password" />
                            <button type="submit" id="login-form-submit" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join