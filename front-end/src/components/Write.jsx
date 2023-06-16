import React, { Fragment, useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios';

const Write = () => {
	const [photoZone, setPhotoZone] = useState("");
	const [imageUrl, setImageUrl] = useState('https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph');
	const [selectedFile, setSelectedFile] = useState(null); // 사진 파일이 선택 되었는가?
	const [test, setTest] = useState("https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph")
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [ tagCategoryList, setTagCategoryList ] = useState([]);


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

	const getTagCategory = (e)=>{
		axios.get("http://172.30.1.21:8088/gocamping/comunity/a")
		.then((res)=>{
			e.preventDefault();
			console.log(res.data);
			setTagCategoryList(res.data);
		})

	}
	
	useEffect(()=>{
		// input(type=file) 파일이 추가되었을때 -> 이벤트 발생
		let photoVal = document.querySelector('.content-left');
		
		if (photoVal) { // photoVal가 존재하면 if문이 실행됨
			console.log("photoVal 테스트", photoVal)

			photoVal.addEventListener("change", (e)=>{
			console.log("e.target.files는?", e.target.files);

			if(e.target.files.length>0) { // 
				console.log('사진 추가됨')
				console.log("story-body", document.querySelector('.story-body')) 
				document.querySelector('.story-body').classList.add('doWrap'); // 줄이 바뀌고
				document.querySelector('.content-left').classList.add('basis100');
				document.querySelector('.content-right').classList.add('basis100');
			} 
			
			if(!e.target.files) { // 파일이 선택 되면(추가됨)
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
			
			<form action='/write' encType="multipart/form-data" method='get'>
				<div className="story-header">
					<p>제목</p>
					<input type='text' name="story_title"></input>
					<p>작성자</p>
					<input type='text' name="story_writer"></input>
				</div>
				<p/>
				{/* story-body */}
				<div className='story-body'>
					{!selectedFile ? (
						<div className='content-left'>
							<p>사진을 업로드 해주세요!</p>
							<input type="file" name="file" id="file" onChange={(e)=>{ setSelectedFile(true); handleFileSelect(e) }}/>
						</div>
					)
					:
					(	
						// 후
						<div className='content-left' onClick={
							(e)=>{
								// console.log("X는", e.nativeEvent.offsetX,", y는", e.nativeEvent.offsetY)
								if(document.getElementById("test")) {
									let itsW = document.getElementById("test").clientWidth;
									let itsH = document.getElementById("test").clientHeight;
									let posX = e.nativeEvent.offsetX - (Number(itsW)/2) +"px"
									let posY = e.nativeEvent.offsetY - (Number(itsH)/2) +"px" 
									// console.log("실행?dfdfddfdfdfdf", 1, e.nativeEvent.offsetX, 2, Number(itsW), 3, posX)									
									document.getElementById("test").style.left=posX
									document.getElementById("test").style.top=posY
								}
							}}>
							<img src={imageUrl} className='photo-content-img'/>
							
							<div className='test' id='test'> </div>
						</div>
					)}
					<img src={imageUrl} onLoad={handleImageLoad} style={{ display: 'none' }} />
					<div className="content-right">
						<textarea style={{resize:"none"}} name="story_content" cols="30" rows="10" placeholder='내용을 입력해주세요!' />
					</div>
				</div>
				<div  className='story-footer'>
					{	selectedFile && 						
							(
							<Fragment>
								<button id='cancelImgBtn' onClick={(event)=>{
								// 사진 취소 기능
								event.preventDefault(); // 기본 동작인 새로고침을 막습니다.(form태그의 새로고침을 막기 위해서)
								// document.getElementById("photo-content").innerHTML=originPhotoZone;
								document.querySelector('.story-body').classList.remove('doWrap'); // 줄이 바뀌고
								document.querySelector('.content-left').classList.remove('basis100');
								document.querySelector('.content-right').classList.remove('basis100');
								setSelectedFile(false);}}>사진 취소하기</button>							
								
								<button onClick={(e)=>{
								console.log("태그 버튼");
								e.preventDefault();
								getTagCategory(e)}}>태그</button>
								
								<button onClick={(e)=>{
								e.preventDefault();
								let newList = tagCategoryList.filter((r)=> r.category_step==1 )
								newList.map(r=>console.log(r))}}>aa</button>
							</Fragment>
						)
					}
					<input type="submit" name="story_upload" value="글 등록하기" />
				</div>


				<hr/>




			</form>

		</div>
    )
}

export default Write