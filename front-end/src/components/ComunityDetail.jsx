import React from 'react'
import { useParams } from 'react-router-dom'

const ComunityDetail = ({comunity}) => {
  /* 
  useParams()
  -url 의 파라미터 정보를 가져올 수 있는 React Hook
  -보통 물품의 교유한 ID값을 설정하는데 적합하다.
  -한가지 정보만 사용 가능

  a.<Route path="/경로이름:파라미터정보"><Route>
  b. 경로에 해당하는 컴포넌트
    1) import useParams from ~~
    2) let {파라미더정보} = useParams()
  */

  let {num} = useParams();

  return (
    <div id='columns'>
      <figure>
        <img src={`http://172.30.1.43:8088/gocamping/${comunity.comunity[num].story_img}`} alt="" width="100px" />

        <figcaption>
          제목 : {comunity.comunity[num].story_title}
        </figcaption>

        <figcaption>
          내용 : {comunity.comunity[num].story_title}
        </figcaption>

        <figcaption>
          조회수 : {comunity.comunity[num].story_views}
        </figcaption>

        <figcaption>
          좋아요 : {comunity.comunity[num].story_likes}
        </figcaption>

        <figcaption>
          유용해요 : {comunity.comunity[num].story_useful}
        </figcaption>
      </figure>
    </div>
  )
}

export default ComunityDetail