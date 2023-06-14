import React from "react";

const Main = () => {
  return (
    <div>
      {/* <div className="container">
   <div className="item">모두의 캠핑</div>
   <div className="item">커뮤니티</div>
</div>

---------------------------
.container {
   display:flex;
   justify-content:space-between
   align-items: center;
} */}

      <header
        style={{
          margin: "0 auto",
          width: "1440px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          backgroundColor: "whitesmoke",
        }}
      >
        <div className="left">
          <div id="logo">모두의 캠핑</div>

          <div id="comunity">커뮤니티</div>

          <div id="shop">쇼핑</div>
        </div>

        <div id="search">
          <input type="text" placeholder="검색하세요" />
        </div>

        <div className="right">
          <div id="register">회원가입</div>

          <div id="gogak">고객센터</div>

          <div id="write">글쓰기</div>
        </div>
      </header>
    </div>
  );
};

export default Main;
