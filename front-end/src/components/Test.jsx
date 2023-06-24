import React, { useState, useEffect } from 'react'
import point from "../cursor3.png"
import TagForm from "./TagForm"
import axios from "axios"
import {TagContext} from "../context/TagContext"
import displayImg from "../checked.png"
import tent from "../tent1.jpg"

const Test = () => {
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
	
	
	

	


	const imgStyle = {
		display: "block",
		width: "100%"
	}
	const divHeight = {
		height: "200px"
	}

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

				document.querySelector("#addTag").disabled= false;

			}
		}
	}

	// 취소 버튼 클릭시 "확인"버튼 비활성화
	if(document.querySelector("#cancelTag")) {
		document.querySelector("#cancelTag").addEventListener("click", ()=>{
			document.querySelector("#addTag").disabled= "true";
		})
	}




	return (
		<>
			<TagContext.Provider value={{tagLists, setTagLists, tagFormList, setTagformList}}>
				<div>
					<div id="imgContainer" onClick={handleClickImg} style={{ width: "400px", margin: "10px", position: "relative", display:"inline-block", backgroundColor:"purple" }}>
						<img id="story_img" src={tent}
							style={imgStyle} alt="uploaded image" />
						<img id="selecting" src={point} style={{ position: "absolute", width: "30px" }}></img>
						{
							tagLists && tagLists.map((item)=>{
								console.log("좌표띄울곳", item.poi_x, item.poi_y);
								let posX = Number(document.querySelector("#imgContainer").clientWidth)*(item.poi_x/100)-5;
								let posY = Number(document.querySelector("#imgContainer").clientHeight)*(item.poi_y/100)-5;
								console.log("좌표띄울곳2", posX, posY)
								return (
									<img onMouseOver={()=>{
										// document.querySelector("")
									}} src={displayImg} 
									style={{width:"20px", position: "absolute",
									left:`${posX}px`, top:`${posY}px`}} />
								)
							})
						}
					</div>
					<div>
						<TagForm selectingPosX={selectingPosX} selectingPosY={selectingPosY}/>
						tagLists
						{
							tagLists && tagLists.map((item, index)=>{
								return <div>{index+1}번째 : {JSON.stringify(item)} <button onClick={()=>{
									let newTagLists = [...tagLists];
									newTagLists.splice(index, 1);
									setTagLists(newTagLists);
								}} key={index} > 삭제 </button> </div>;
							})
						}
					</div>

					<div style={divHeight}></div>
				</div>
			</TagContext.Provider>
		</>
	)
}

export default Test;