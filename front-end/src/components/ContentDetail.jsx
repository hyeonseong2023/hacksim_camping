
import React, { useEffect, useState } from 'react'
import Comment from "./Comment"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Comment_test from './Comment_test'
import Footer from './Footer'

const ContentDetail = ({tableMarginTB, contentImgHeight, contentImgWidth, tableWidth, comunity,setComunity}) => {

	let realImgUrl = ""
	const {idx} = useParams();
	
	//  링크 가져오기
	 const story_idx = `${idx}`
const [link,setLink] = useState('');
	


	console.log(`Index Value: ${idx}`);

	useEffect(() =>{

		// 링크 가져오기
		getLink();


		console.log(idx);
		let url=`http://localhost:8088/gocamping/comunity/${idx}`;
		// let url=`http://172.30.1.43:8088/gocamping/comunity/${idx}`;
		axios
		.get(url)
		.then((res) => {
		  console.log('API Response:', res.data);
		  setComunity(res.data);
		})
		.catch((error) => {
		  console.log('API Error:', error);
		});
	},[])



	//링크 가져오기
	const getLink = async () => {

        const linkData = {
          story_idx: story_idx
        }
        try {
            const response = await axios.post('/gocamping/getlink', linkData)

            if (response.status === 200) {
                // alert('링크가져오기 성공');
				console.log('링크 : ',response.data);
                setLink(response.data)
           

                console.log(link)

            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("링크 가져오기실패")
            }

        }
    };
	
   
	
	// realImgUrl = "https://images.unsplash.com/photo-1620439032751-d2011065c735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
	return (

		<div className='content-body' style={{position:"relative"}}>
			{console.log("return문")}
			
			<table style={{ textAlign: "center", margin: `${tableMarginTB}px auto`, width:tableWidth, height:"auto" }}>

				<tbody>
					<tr>
						<th>제목</th>
						<td>{comunity &&comunity.story_title}</td>
						
					</tr>

					<tr>
						<th>작성자</th>
						<td >{comunity &&comunity.user_email}</td>
					</tr>

					<tr >
						<th>이미지</th>
						<td style={{position: "relative" }}>
						{comunity &&comunity.story_img!=undefined&& <td > <img width='250px' src={`http://172.30.1.43:8088/gocamping/${comunity.story_img}`}/> </td>}
						</td>
					</tr>

					<tr >
						<th>내용</th>
						<td >오늘 캠핑 다녀 왔어요~</td>
					</tr>
					<tr>
						<td></td>
						<td>{/* 링크 가져오기 */}
							<a target='_blank' href={link}>제품 구경하러 가기</a>
							</td>
						<td></td>
							</tr>
				</tbody>
				
			</table>
			

						
			<Comment_test />




			{/* <div style={{ height: "30px" }} /> */}


		
		</div>
	)
}

export default ContentDetail