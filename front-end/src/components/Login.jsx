import React from 'react'
import '../Login.css'
import axios from 'axios'
const Login = ({inputEmail, setInputEmail, inputPw, setInputPw}) => {

    const handleUseremailChange = (e) => {
        setInputEmail(e.target.value);
        console.log(e.target.value);
    }


    const handleUserPwChange = (e) => {
        console.log(e.target.value);
        setInputPw(e.target.value);
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();

        const requestData = {
            inputEmail: inputEmail,
            inputPw: inputPw
        };

        axios.post("/gocamping/login", requestData)
            .then((res) => {
                console.log(res);
                console.log("이메일 = ", requestData.inputEmail);
                console.log("PW =  ", requestData.inputPw);
                alert('데이터 전송 성공')
            })
            .catch(error => {
                console.error(error); // 오류 발생 시 에러 로그를 출력
                alert('데이터 전송 실패')
            });

    };


    return (
        <div id='login-container'>
            <body>
                <div class="main">
                    <h1 class="logo">Acidgram</h1>
                    <div class="container">
                    <form id="login-form" onSubmit={handleFormSubmit}>
                                <input type="text" value={inputEmail} onChange={handleUseremailChange} name="useremail" id="useremail-field" className="login-form-field" placeholder="E-mail" />
                                <input type="text" value={inputPw} onChange={handleUserPwChange} name="userpassword" id="password-field" className="login-form-field" placeholder="Password" />
                                <button type="submit" id="login-form-submit" />
                            </form>
                        <p id="alert" class="account"> </p>
                    </div>
                </div>
                <script src="script.js"></script>
            </body>
        </div>
    )
}

export default Login