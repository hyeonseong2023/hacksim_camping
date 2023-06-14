import React, { useEffect, useState } from 'react'
import "../App.css"

const Write = () => {
	
	const [photoZone, setPhotoZone] = useState("");

	useEffect(()=>{
		
		// input(type=file) 파일이 추가되었을때 -> 이벤트 발생
		let photoVal = document.getElementById("photo-content");
		setPhotoZone(photoVal.innerHTML);
		const imgChange = (e)=>{
			console.log("adsfasdfasdf");
		}

		// photo.addEventListener("change",e=>{
		// 	//readImage(e.target);
		// 	console.log("e.target!!!!", e.target);
		// })

		if (photoVal) { // photoVal가 존재하면 if문이 실행됨
			console.log("photoZone : ",photoZone);
			
			// console.log("photoVal이 있음");

			
			photoVal.addEventListener("change", (e)=>{
				if(e.target.files.length===0) {
					console.log("파일이 삭제됨");
					// photoVal.innerHTML="<h1>테스트<h1>";
					console.log("dd")
				} else { // 파일이 선택 되면
					photoVal.innerHTML="<div>aa</div>"
				}
					
				// console.log(e.target.files);
			});
			
			return ()=>{
				photoVal.removeEventListener("change", imgChange);
			}
		}
	},[])


    return (
    	<div className='write'>

			<form action='' method='post'>
				<div className="story-header">
					<p>제목 : </p>
					<input type='text' name="story_title"></input>
					<p>작성자</p>
					<input type='text' name="story_writer"></input>
				</div>
				<p />
				<div className='story_content'>
					<div id='photo-content' className='content-left' style={{backgroundColor:"lightgray"}}>
						<p>사진을 업로드 해주세요!</p>
						<input type="file" name="file" id="file"></input>
						{/* <button type='file'>사진 업로드</button> */}
					</div>
					<div className="content-right">
						<textarea style={{resize:"none"}} name="story_content" cols="30" rows="10"
						placeholder='내용을 입력해주세요!'></textarea>
					</div>
				</div>
				<div  className='content-upload'>
					<input type="submit" name="story_upload" value="글 등록하기" />
				</div>


				<hr/>




			</form>

		</div>
    )
}

export default Write