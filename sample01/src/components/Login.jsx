import React, { useEffect } from 'react'
import kakao from'../img/kakao.svg'
import '../Join.css';
const Login = () => {
    useEffect(()=>{
    const signUpBtn = document.getElementById("signUp");
    const signInBtn = document.getElementById("signIn");
    const container = document.querySelector(".container");
    
    signUpBtn.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });
    signInBtn.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
},[])
    return (
            <div>
                <div className="wrapper">
                    <div className="container">
                        <div className="sign-up-container">
                            <form>
                                <h1>Create Account</h1>
                                <div className="social-links">
                                <a href="#">
                                        <img src={kakao}/>
                               </a>
                                    <div>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                
                                <span>SNS 회원가입</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button className="form_btn">Sign Up</button>
                            </form>
                        </div>
                        <div className="sign-in-container">
                            <form>
                                <h1>Sign In</h1>
                                <div className="social-links">                                   
                                    <div>
                                        <a href="#"><i class="fa-brands fa-google"/></a>
                                    </div>
                                    <div>
                                        <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                                <span>SNS 로그인</span>
                                <input type="email" placeholder="Email" />
                                <input type="password" placeholder="Password" />
                                <button class="form_btn">Sign In</button>
                            </form>
                        </div>
                        <div className="overlay-container">
                            <div className="overlay-left">
                                <h1>Welcome Back</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button id="signIn" className="overlay_btn">Sign In</button>
                            </div>
                            <div className="overlay-right">
                                <h1>Hello, Friend</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button id="signUp" className="overlay_btn">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    )
}

export default Login