import React, { useEffect } from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import intro from '../../src/intro-video.gif'

const Header2 = () => {
    useEffect(()=>{
        if (document.querySelector('.search')) {
            const searchEl = document.querySelector('.search');
            const searchInputEl = searchEl.querySelector('input');
        
            searchEl.addEventListener('click', function () {
                searchInputEl.focus();
            });
        
            searchInputEl.addEventListener('focus', function () {
                searchEl.classList.add('focused');
                searchInputEl.setAttribute('placeholder', '통합검색');
            });
        
            searchInputEl.addEventListener('blur', function () {
                searchEl.classList.remove('focused');
                searchInputEl.setAttribute('placeholder', '');
            });
        }
    },[])
    
    return (
        <header>
            <div className="inner">
                <a href="/" className="logo">
                    <img src="#" alt="Modoo Camping" />
                </a>

                <div className="sub-menu">
                    <ul className="menu">
                    <Link to="/login" style={{ textDecoration: "none", color: "red" }}>
                        <li>
                       
                            로그인
                        </li>
                        </Link>
                        <li>
                            {/* <Link to={}>About</Link>  */}
                        </li>
                        <li>
                            <a href="#">Customer Upload Community</a>
                        </li> 
                        <li>
                        <Link to="/mypage" style={{ textDecoration: "none", color: "black" }}>
                                마이페이지</Link>
                        </li>
                    </ul>
                    <div className="search">
                    <Link to='/searchpage' style={{ textDecoration: "none", color: "black" }}>
                        <input type="text" />
                        </Link>
                        {/* <!-- 구글 아이콘 출력하는 방법  --> */}
                        <div className="material-icons">search</div>
                    </div>
                </div>
            </div>

            
        </header>
    )
}

export default Header2