import React, { useEffect } from 'react'
import axios from 'axios'
import SyLoadBoardItem from './SyLoadBoardItem'

const SyLoadBoardList = () => {
  useEffect(()=>{
    axios.get("http://172.30.1.43:8088/gocamping/comunity")
    .then((res)=>{
      console.log('성공')
      console.log(res.data);
    })
    .catch((error)=>{
      console.log('통신 실패')
    })
  }, [])

  return (
    <div style={{margin:"0 20px"}}>
      <div style={{height:"200px"}}></div>
	<div>
		모두의 캠핑 BEST 게시글
	</div>

      <div >
        <h4> 😎 New 최신글</h4>
        <div style={{display:"flex", flexWrap: "wrap", margin:"0 10%"}}>
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />
          <SyLoadBoardItem />

        </div>
      </div>
      
    </div>
  )
}

export default SyLoadBoardList