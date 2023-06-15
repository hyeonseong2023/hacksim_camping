import React, { useEffect, useState } from 'react'
import "../App.css"

const Write = () => {
	const [photoZone, setPhotoZone] = useState("");
	const [imageUrl, setImageUrl] = useState('https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph');
	const [selectedFile, setSelectedFile] = useState(null); // 사진 파일이 선택 되었는가?
	const [test, setTest] = useState("https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph")
	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const handleFileSelect = (event) => {
		console.log('handleFileSelect 함수 들어옴')
		const file = event.target.files[0];
		console.log(event.target.files[0]);
		const reader = new FileReader();
		reader.readAsDataURL(file);
		
		reader.onloadend = () => {
			setImageUrl(reader.result);
		}
	};
	
	

	const handleImageLoad = () => {
		setIsImageLoaded(true);
	};
	
	
	useEffect(()=>{
		// input(type=file) 파일이 추가되었을때 -> 이벤트 발생
		let photoVal = document.getElementById("photo-content");

		if (photoVal) { // photoVal가 존재하면 if문이 실행됨
			photoVal.addEventListener("change", (e)=>{
				if(e.target.files.length>0) { // 
					
					console.log('사진 추가됨')
					//photoVal.innerHTML="<img src={imageUrl} style={{width:`100%`}}></img>"

					document.getElementById('photo-content').classList.add('magnifyImg');
					document.getElementById('story_content').classList.add('doWrap');
					// alert(document.getElementById('photo-content').className);
					console.log("dd")
				} 
				if(!e.target.files.length) { // 파일이 선택 되면(추가됨)
					console.log("파일이 삭제됨");
				}
			});

			// document.getElementById('cancelImgBtn').addEventListener("click", (event)=>{
			// 	event.preventDefault(); // 기본 동작인 새로고침을 막습니다.
			// 	document.getElementById("photo-content").innerHTML=photoZone
			// })

			// return ()=>{
			// 	photoVal.removeEventListener("change", imgChange);
			// }
		}
	},[])


    return (
    	<div className='write'>
			{/* <div style={{ background:`url(${imageUrl})`, minHeight:'250px'}} /> */}
			{/* <img src={imageUrl} style={{width:"100%"}}></img> */}


			<form action='' method='get'>
				<div className="story-header">
					<p>제목</p>
					<input type='text' name="story_title"></input>
					<p>작성자</p>
					<input type='text' name="story_writer"></input>
				</div>
				<p />
				<div className='story_content' id="story_content">
					{!selectedFile ? (
						<div id='photo-content' className='content-left' style={{backgroundColor:"lightgray"}}>
							<p>사진을 업로드 해주세요!</p>
							<input type="file" name="file" id="file" onChange={(e)=>{ setSelectedFile(true); handleFileSelect(e) }}/>
						</div>
					)
					:
					(	
						// 사진이 업로드 되면 
						<div id='photo-content' className='content-left magnifyImg' 
						style={{
							background: isImageLoaded ? `no-repeat url(${imageUrl})` : 'none',
							// backgroundPositionX: "center",
							// backgroundSize:"contain"
							// backgroundSize:"contain"
							}}>
						</div>
					)}
					<img src={imageUrl} onLoad={handleImageLoad} style={{ display: 'none' }} />

						
					
					<div className="content-right">
						<textarea style={{resize:"none"}} name="story_content" cols="30" rows="10"
						placeholder='내용을 입력해주세요!'></textarea>
					</div>
				</div>
				<div  className='content-upload'>
					<input type="submit" name="story_upload" value="글 등록하기" />
					{selectedFile && 
						<button id='cancelImgBtn' 
						onClick={(event)=>{
							// 사진 취소 기능
							event.preventDefault(); // 기본 동작인 새로고침을 막습니다.(form태그의 새로고침을 막기 위해서)
							// document.getElementById("photo-content").innerHTML=originPhotoZone;
							document.getElementById('photo-content').classList.remove('magnifyImg');
							document.getElementById('story_content').classList.remove('doWrap');
							setSelectedFile(false);
						}}	
					>사진 취소하기</button>}
				
				</div>


				<hr/>




			</form>

		</div>
    )
}

export default Write