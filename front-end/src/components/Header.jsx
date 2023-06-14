import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  const toMiddle = {
    verticalAlign:"middle",
  }

  return (
    <div className='header' id='header'>
      <div className='siteName'>
        <p><strong><Link to="/">모두의 캠핑</Link></strong></p>
      </div>

      <div style={{fontSize:"18px", margin:"48px 0 48px 0"}}>
        전체 게시판
      </div>

      <div className='header-menu'>
        <div className='item btn' >
          <p>인기글</p>
        </div>

        <div className='item btn'>
          최신글
        </div>

        <div className='item btn'>
          좋아요 Best
        </div>
        
        <div className='item btn'>
          유용해요 Best

      </div>

      </div>

    </div>
  )
}

export default Header