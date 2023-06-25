import React, { useEffect } from 'react'
import "../App.css"

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
                        <li>
                            <a href="/signin">Sign In</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Customer Upload Community</a>
                        </li>
                        <li>
                            <a href="#">My Page</a>
                        </li>
                    </ul>
                    <div className="search">
                        <input type="text" />
                        {/* <!-- 구글 아이콘 출력하는 방법  --> */}
                        <div className="material-icons">search</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header2