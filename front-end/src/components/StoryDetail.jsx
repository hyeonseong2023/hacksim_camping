import React from 'react'
import { useEffect, useState  } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';

const StoryDetail = () => {

    let {num} = useParams()
    console.log('num',num);

// 화면에 띄우려면 State >> 한개 정보가져오기 >> 초기값을 비어있는 객체로 넣어줄것 [] 
    const [oneList , setOneList] = useState([])

    
// useEffect 안하면 무한 렌더링 됨!  >> 무한루프 , 클릭시점보다 이전의 결과값이 나오는건 모두 useEffect안해서임
   useEffect (()=>{

    axios.get(`http://172.30.1.43:8088/gocamping/${num}`)  // `` 백틱으로 처리해주기 
    .then((res)=>{
      console.log('단일 결과 :',res.data);
      setOneList(res.data.story_idx) //pcode대신 story_idx쓰기??
    })
   },[])

  return (
    <div key={oneList.story_idx}>     
           <img width='300px' src={`data:image/;base64,` + oneList.img}></img>
    </div>
  )
}

export default StoryDetail