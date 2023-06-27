import React, { useEffect } from 'react'
import '../Mypage.css'
import { useNavigate } from 'react-router-dom';
const SearchPage = ({ world, setWorld, searchList }) => {

    let searchWorld = '';
    console.log(searchList.length);
    const searchDataLength = searchList.length;
    const nav = useNavigate();

    useEffect(() => {

        searchWorld = world


    }, [])

    return (



        <div id='hj_mypage'>
            <div id='hj_user-container'>검색결과 총{searchDataLength} 건 </div>
            <div id='hj_columns'>
                {searchList.map((item, index) => (
                    <figure key={index}>
                        <img  onClick={()=>{nav(`/comunity/ContentDetail/${item.story_idx}`)}} src={`http://localhost:8088/gocamping/${item.story_img}`} alt={`Image ${index}`}  />
                        <figcaption>{item.story_title}</figcaption>
                    </figure>
                ))}

            </div>
        </div>

    )
}

export default SearchPage