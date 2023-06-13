import React from 'react'

const Main = () => {
  return (
    <div>
      <header style={{height : "200px", marginLeft : "300px", position : 'absolute', display:"flex", alignItems:"center",backgroundColor:"yellow"}}>
        <div id='logo'>
          모두의 캠핑
        </div>

        <div id='comunity'>
          커뮤니티
        </div>

        <div id='shop'>
          쇼핑
        </div>

        <div id='search'>
          <input type="text" placeholder='검색하세요' />
        </div>

        <div id='register'>
          회원가입
        </div>
        
        <div id='gogak'>
          고객센터
        </div>

        

        <div id='write'>
          글쓰기
        </div>

      </header>
        

    </div>
  )
}

export default Main