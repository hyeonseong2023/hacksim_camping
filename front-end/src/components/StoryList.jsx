import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const StoryList = ({list}) => {
    console.log('prop : ', list);

     
    //type filter 작업을 거치고 사용할 list

  /*만약 , '원피스'페이지를 클릭하면 type이 dress 인것만
    '전체' 페이지를 클릭하면 전체 */

   const[typeParams, setTypeParams] = useSearchParams()
   let type = typeParams.get('type')
 

   // type filter 작업을 거치고 사용할 list
   let newList = type !== null && list.filter(item=>item.tb_story.story_category == '기본')
   
   const nav = useNavigate()
  return (
    <div>
      
      {type == null ? 
           list.map(item => 
            <div key={item.tb_story.story_idx} onClick={()=>{nav(`/tb_story/${item.tb_story.story_idx}`)}}>
                <img width='100px' src={"data:image/;base64," + item.tb_story.img}></img>
                {/* <p><strong>{item.product.pname}</strong> {item.product.price}</p> */}
            </div>
        )
        :
           newList.map(item =>
              <div key={item.tb_story.story_idx} onClick={()=>{nav(`/tb_story/${item.tb_story.story_idx}`)}}>
                  <img width='100px' src={"data:image/;base64," + item.tb_story.img}></img>
                  {/* <p><strong>{item.product.pname}</strong> {item.product.price}</p> */}
              </div>
          )
          
          
          }



    </div>
  )
}

export default StoryList