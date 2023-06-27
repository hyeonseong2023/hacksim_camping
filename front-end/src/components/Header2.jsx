import React, { useEffect } from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import intro from '../../src/intro-video.gif'
import logo from "../logo-camping.png"

const Header2 = ({ world, setWorld, searchList, setSearchList }) => {
    useEffect(() => {
        // if (document.querySelector('.search')) {
        //     const searchEl = document.querySelector('.search');
        //     const searchInputEl = searchEl.querySelector('input');

        //     searchEl.addEventListener('click', function () {
        //         searchInputEl.focus();
        //     });

        //     searchInputEl.addEventListener('focus', function () {
        //         searchEl.classList.add('focused');
        //         searchInputEl.setAttribute('placeholder', '통합검색');
        //     });

        //     searchInputEl.addEventListener('blur', function () {
        //         searchEl.classList.remove('focused');
        //         searchInputEl.setAttribute('placeholder', '');
        //     });
        // }
    }, [])


    // 게시글 검색 기능 ~
    // header2 게시글 검색 함수 ->
    const nav = useNavigate();
   
       // const getworld = (e)=>{
       //     e.preventDefault();
       //     setWorld(e.target.value)
       // }
     
         
           const clickSearch = async (e) => {
             console.log('클릭');
         
             try {
               setWorld(e.target.value);
               const response = await axios.post("/gocamping/search", { story_content: world });
         
               if (response.status === 200) {
                 console.log(response.data.length);
                 console.log(response.data);
         
                 setSearchList(response.data);
                 console.log('서치데이터 전송');
                 nav('/searchpage');
               }
             } catch (error) {
               if (error.response && error.response.status === 401) {
                 console.error(error); // 오류 발생 시 에러 로그를 출력
                 alert('데이터로드실패😥');
               }
             }
    
           };
    // ~ 게시글 검색 기능


    // 로그아웃 기능
    const isLoggedIn = localStorage.getItem("loginSuccess") === "Y";
    const user_role = localStorage.getItem("user_role");

    const handleLogout = () => {
        localStorage.removeItem("loginSuccess");
        localStorage.removeItem("user_email");
        localStorage.removeItem("user_pw");
        localStorage.removeItem("user_nick");
        localStorage.removeItem("user_role");
        localStorage.removeItem("user_joindate");
        nav("/");
        window.location.reload();
    };

    return (
        <header>
            <div className="inner">

                {/* 사진 넣어주세요*/}
                <Link to='/' className='logo'>
                    <img src={logo}/>
                </Link>

                
                <div className="sub-menu">
                    <ul className="menu">
                    <Link to="/login" style={{ textDecoration: "none", color: "red" }}>
                    
                        </Link>
                        <li>
                            {/* <a href="a">Community</a> */}
                            <div style={{display:"flex", alignItems:"center"}}>
                                <Link style={{display: "block", color: "black"}} to='/comunity/contentDetail'>Community</Link> 
                            </div>
                        </li> 

                    

                        {/* 
                            <li>
                            <Link to={}>About</Link>  
                            </li> 

                            ???
                        */}

                        {isLoggedIn ? (
                            <>
                            
                                <li>
                                    <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
                                        마이페이지</Link>
                                </li>
                                {user_role === "A" && (
                                    <li>
                                        <Link to="/mypage_A" style={{ textDecoration: "none", color: "black" }}>
                                            <div>관리자페이지</div>
                                        </Link>
                                    </li>

                                )}

                                <li>
                                    <div id="logout" onClick={handleLogout}>로그아웃</div>
                                </li>
                            </>
                        ) : (
                            <>
                                <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                                    <li>
                                        로그인
                                    </li>
                                </Link>
                                <Link to="/join" style={{ textDecoration: "none", color: "black" }}>
                                    <li>
                                        회원가입
                                    </li>
                                </Link>

                            </>
                        )}

                        <div>
                            <Link to='/write' style={{color : "black"}}>글쓰기</Link>
                        </div>

                        <div id='search1' >
                            <input type="text" value={world} onChange={(e) => { setWorld(e.target.value); console.log(world); }} placeholder="검색어 입력" />
                            <button onClick={clickSearch}>검색</button>
                        </div>

                        

                    </ul>


                    <div className="search">

                        {/* <Link to='/searchpage' style={{ textDecoration: "none", color: "black" }}>
                            <input type="text" />
                        </Link> */}

                        {/* <!-- 구글 아이콘 출력하는 방법  --> */}
                        {/* <div className="material-icons">search</div> */}

                        

                        
                    </div>

                </div>
            </div>


        </header>
    )
}

export default Header2