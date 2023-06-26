import React, { Fragment, useEffect, useRef, useState } from 'react'
import "../App.css"
import axios from 'axios';
import point from "../cursor3.png"
import { TagContext } from '../context/TagContext';
import TagForm from "./TagForm"
import displayImg from "../checked.png"

const Write = () => {

	const [photoZone, setPhotoZone] = useState("");
	const [imageUrl, setImageUrl] = useState('https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph');
	const [selectedFile, setSelectedFile] = useState(null); // 사진 파일이 선택 되었는가?
	const [test, setTest] = useState("https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph")
	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [tagCategoryList, setTagCategoryList] = useState([]);
	const [cStep, setCStep] = useState(0);
	const [story_title, setStory_title] = useState('');
	const [story_writer, setStory_writer] = useState('');
	const [story_content, setStory_content] = useState('');
	const [story_img, setStory_img] = useState(null);


	// 클릭한 위치 px좌표
	const [cPosX, setCPosX] = useState(0);
	const [cPosY, setCPosY] = useState(0);
	// 업로드된 사진 크기
	const [imgWidth, setImageWidth] = useState(0);
	const [imgHeight, setImgHeight] = useState(0);
	// 표시될 이미지의 좌표
	const [ selectingPosX, setSelectingPosX ] = useState();
	const [ selectingPosY, setSelectingPosY ] = useState();
	const [tagLists, setTagLists] = useState([]);
	// let tagFormValue = `<div> <TagForm selectingPosX={selectingPosX} selectingPosY={selectingPosY}/> `;
	const [ tagFormList, setTagformList ] = useState([]);


	let a = 0;
	let b = 0;

	let aaaaa ={
		"a":5
	}

	function onchangeFile(event) {
		// setStory_img(e.target.files[0]);
		console.log("사진이 추가 되었습니다. ");
		console.log("eventeventeventeventevent", event);
		setStory_img(event.target.files[0]);
		setSelectedFile(true);
		handleFileSelect(event);
	}


	const handleFileSelect = (event) => { // 입력한 파일(사진)을 렌더링 해주는 함수
		console.log('handleFileSelect 함수 들어옴')
		const file = event.target.files[0];

		console.log(event.target.files[0]);
		const reader = new FileReader();
		reader.readAsDataURL(file);


		reader.onloadend = () => {
			setImageUrl(reader.result);
		}
	};


	const handleClickImg = (event) => {		
		
		// 업로드 이미지와, 클릭 위치를 이용해 클릭된 위치를 백분율로 표시		
		if (document.querySelector("#selecting")) {
			let selecting = document.querySelector("#selecting");
			// (parseInt((cPosX / imgWidth) * 100));
			// setSelectingPosY(parseInt((cPosY / imgHeight) * 100));

			// selecting.style.left = document.querySelector("#imgContainer").clientWidth*(selectingPosX/100)-(Number(document.querySelector("#selecting").clientWidth) / 2)+"px";
			// selecting.style.top =  document.querySelector("#imgContainer").clientHeight*(selectingPosY/100)-(Number(document.querySelector("#selecting").clientHeight) / 2)+"px";
			selecting.style.left = (document.querySelector("#imgContainer").clientWidth*(event.nativeEvent.offsetX / document.querySelector("#story_img").clientWidth))-5+"px";
			selecting.style.top = (document.querySelector("#imgContainer").clientHeight*(event.nativeEvent.offsetY / document.querySelector("#story_img").clientHeight))-5+"px";
			
			let sLeft = parseInt((event.nativeEvent.offsetX / document.querySelector("#story_img").clientWidth)*100)
			let sTop = parseInt((event.nativeEvent.offsetY / document.querySelector("#story_img").clientHeight)*100)
			document.querySelector("#selecting").style.opacity="1"
			setSelectingPosX(sLeft)
			setSelectingPosY(sTop)

			//포인터가 투명할때  클릭하면 활성화
			if(document.querySelector("#selecting")&&document.querySelector("#selecting").style.opacity==1) {
				if(document.querySelector("#inputTNBox").value!='' && document.querySelector("#inputTLBox").value) {
					document.querySelector("#addTag").disabled= false;
				}

			}
		}
	}
	// 취소 버튼 클릭시 "확인"버튼 비활성화
	if(document.querySelector("#cancelTag")) {
		document.querySelector("#cancelTag").addEventListener("click", ()=>{
			document.querySelector("#addTag").disabled= "true";
			
			document.querySelector("#selecting").style.opacity=0;
		})
	}

   const handleImageLoad = () => {
      setIsImageLoaded(true);
   };


	// 글 작성하기
	const handleSubmit = (e) => { // 글올리기 요청
		e.preventDefault();
		// const requestData ={
		//    story_title : story_title,
		//    story_writer : story_writer,
		//    story_content : story_content
		// }
		const formData = new FormData();
		formData.append("story_title", story_title);
		formData.append("user_email", "aa@naver.com");
		formData.append("story_content", story_content);
		formData.append("story_category", "기본");
		formData.append('story_img', story_img);
		console.log("4 story_img", formData.get("file"))
		
		let testtt = JSON.stringify(tagLists);
		console.log("typeof : ", typeof testtt)
		formData.append("tagLists", testtt);
		// formData.append("tagLists", typeof (JSON.stringify(tagLists)));
		console.log("typeof taglistsssssssssssssssssssssss", typeof tagLists)

		console.log("1", story_title)
		console.log("2", story_writer)
		console.log("3", story_content)



	axios.post('http://localhost:8088/gocamping/comunity/write', formData, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
		})
		.then((res) => {
		// alert('통신 성공!')
			console.log(res)
			alert("글 올리기 성공!")
		})
		.catch((e) => {
			alert('통신 실패')
		})
	}


const getTagCategory = (e) => {
	axios.get("http://localhost:8088/gocamping/comunity/a")
	.then((res) => {
		e.preventDefault();
		console.log(res.data);
		setTagCategoryList(res.data);
	})
	.catch((e) => {
		console.log(e)
	})
}



   useEffect(() => {
      // input(type=file) 파일이 추가되었을때 -> 이벤트 발생
      let photoVal = document.querySelector('.content-left');

      if (photoVal) { // photoVal가 존재하면 if문이 실행됨
         console.log("photoVal 테스트", photoVal)

         photoVal.addEventListener("change", (e) => {
            console.log("e.target.files는?", e.target.files);

            if (e.target.files.length > 0) { // 
               console.log('사진 추가됨')
               console.log("story-body", document.querySelector('.story-body'))
               document.querySelector('.story-body').classList.add('doWrap'); // 줄이 바뀌고
               document.querySelector('.content-left').classList.add('basis100');
               document.querySelector('.content-right').classList.add('basis100');
            }

            if (!e.target.files) { // 파일이 선택 되면(추가됨)
               console.log("파일이 삭제됨");
            }
         });


			// document.getElementById('cancelImgBtn').addEventListener("click", (event)=>{
			//    event.preventDefault(); // 기본 동작인 새로고침을 막습니다.
			//    document.getElementById("photo-content").innerHTML=photoZone
			// })

			// return ()=>{
			//    photoVal.removeEventListener("change", imgChange);
			// }
		}


	}, [])
	window.addEventListener('resize', () => {
		// 크기 변화 감지 시 실행할 동작을 여기에 작성합니다.
		console.log('Browser window resized');
	});

	const handleStoryTitle=(e)=>{
		setStory_title(e.target.value)
		if(story_title==""||story_content=="") {
			document.querySelector("#uploadBtn").disabled=true;
		} else {
			document.querySelector("#uploadBtn").disabled=false;
		}
	}
	const handleStoryContent=(e)=>{
		setStory_content(e.target.value)
		if(story_title==""||story_content=="") {
			document.querySelector("#uploadBtn").disabled=true;
		} else {
			document.querySelector("#uploadBtn").disabled=false;
		}
	}


	return (
		<TagContext.Provider value={{tagLists, setTagLists, tagFormList, setTagformList}}>
			<div className='write'>
				<form onSubmit={handleSubmit} method="post" encType="multipart/form-data" >
					<div className="story-header">
						<p>제목</p>
						<input onChange={handleStoryTitle} onBlur={handleStoryTitle} value={story_title} type='text' name="story_title"></input>
						
					</div>
					<p />
					{/* story-body */}
					<div className='story-body'>
						{!selectedFile ? (
							<div className='content-left'>
								<p>사진을 업로드 해주세요!</p>
								<input type="file" name="story_img" id="story_img" onChange={onchangeFile} />
							</div>
						)
							:
							(
								// 후
								<div className='content-left'>
									<div style={{ display: "inline-block", position: "relative", width:"50%" }} id='imgContainer' onClick={handleClickImg}>
										{/* 추가된 사진이 출력되는 곳 */}
										<img src={imageUrl} style={{width:"100%"}} alt="uploaded image" className='photo-content-img' id="story_img"/>
										<img id="selecting" src={point} style={{ position: "absolute", width: "30px" }}></img>
										{
											(tagLists&&selectedFile) && selectedFile && tagLists.map((item) => {
												console.log("좌표띄울곳", item.poi_x, item.poi_y);
												let posX = Number(document.querySelector("#imgContainer").clientWidth) * (item.poi_x / 100) - 5;
												let posY = Number(document.querySelector("#imgContainer").clientHeight) * (item.poi_y / 100) - 5;
												console.log("좌표띄울곳2", posX, posY)

												window.addEventListener('resize', () => {
													// 크기 변화 감지 시 실행할 동작을 여기에 작성합니다.
													console.log('Browser window resized');
												});
												return (
													<img onMouseOver={() => {
														// document.querySelector("")
													}} src={displayImg}
														style={{
															width: "20px", position: "absolute",
															left: `${posX}px`, top: `${posY}px`
														}} />
												)
											})
										}
									</div>
								</div>
							)}
						<img src={imageUrl} onLoad={handleImageLoad} style={{ display: 'none' }} />
						<div className="content-right">
							<textarea style={{ resize: "none" }} value={story_content} onChange={handleStoryContent} onBlur={handleStoryContent} name="story_content" cols="30" rows="10" placeholder='내용을 입력해주세요!' />
						</div>
					</div>
					<div>
						{
							selectedFile &&
							<TagForm selectingPosX={selectingPosX} selectingPosY={selectingPosY}/>
						}

						{tagLists&&(tagLists.length==0? "" : "tagLists : "+tagLists.length+"개")}
						{
							tagLists && tagLists.map((item, index)=>{
								console.log("item은", item)
								return (
									<div>
										{index+1}번째 : 상품명:{item.product_name}/상품 링크:{item.product_link}/x좌표:{item.poi_x}%/y좌표:{item.poi_y}%
										<button type='button'  onClick={()=>{ 
											let newTagLists = [...tagLists];
											newTagLists.splice(index, 1);
											setTagLists(newTagLists); }} 
									key={index} > 삭제 </button> </div>)
							})
						}


					</div>
					<div className='story-footer'>
						{selectedFile &&
							(
								<Fragment>
									<button id='cancelImgBtn' onClick={(event) => {
										// 사진 취소 기능
										event.preventDefault(); // 기본 동작인 새로고침을 막습니다.(form태그의 새로고침을 막기 위해서)
										// document.getElementById("photo-content").innerHTML=originPhotoZone;
										document.querySelector('.story-body').classList.remove('doWrap'); // 줄이 바뀌고
										document.querySelector('.content-left').classList.remove('basis100');
										document.querySelector('.content-right').classList.remove('basis100');
										setStory_img(null);
										setSelectedFile(false);
										setTagLists([]);
									}}>사진 취소하기</button>

									<button onClick={(e) => {
										console.log("태그 버튼");
										e.preventDefault();
										getTagCategory(e)
									}}>태그</button>

									{/* <button onClick={(e)=>{
                        e.preventDefault();
                        let newList = tagCategoryList.filter((r)=> r.category_step==1 )
                        newList.map(r=>console.log(r))}}>1스텝</button> */}
								</Fragment>
							)
						}
						<input type="submit" name="story_upload" value="글 등록하기" id='uploadBtn' disabled="true" />
					</div>


					<hr />
					{/* {story_content}<br/>
					{JSON.stringify(tagLists)} */}

				</form>

			</div>
		</TagContext.Provider>
	)

}

export default Write