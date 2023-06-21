
import { click } from '@testing-library/user-event/dist/click';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

// 참고 사이트
// 버튼클릭 -> 스타일 적용
// 1. https://dev-bak.tistory.com/16
// 2. https://dororongju.tistory.com/30
// 3. https://velog.io/@song961003/React-div%EC%97%90-contentEditable%EC%86%8D%EC%84%B1-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
// useRef
// 4. https://velog.io/@minho100227/useRef%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-focus%EA%B8%B0%EB%8A%A5
// 5. https://padak-padak.tistory.com/56
// 6. document.execCommand 이 외의 https://tttap.tistory.com/126



const Comment = () => {
	const [ cStyle, setCStyle ] = useState('');
	const [ inputValue, setInputValue ] = useState('0');
	const ref_editor = useRef(null);
	const styleProperties = ['font-weight', 'font-style', 'font-size', 'text-decoration', 'height'];

	function setStyle(style) {
		
		document.execCommand(style);
		console.log("setSyle문", style)
		
		const filteredStyle = {};
		

		// div.comment-editor 가 있다면
		if(document.querySelector('.comment-editor')) 
		{
			const editor = document.querySelector('#comment-input-area')

			ref_editor.current.focus();
			const currentStyle = window.getComputedStyle(editor);
			
			let tmp = {}
			console.log("for문 시작")
			if(editor.querySelectorAll('div')) { // 댓글이 여러줄
				styleProperties.forEach(prop=>{
					editor.querySelectorAll('div').forEach((element)=>{
						// tmp.setAttribute(prop, element.getPropertyValue(prop));
						// console.log("~~~~~~~~~~~~~~~~~~", prop, getPropertyValue(prop))
					})
				})
			}
			// for (const prop in currentStyle) {
			// 	if(currentStyle.hasOwnProperty(prop)&& currentStyle[prop]) {
			// 		filteredStyle[prop] = currentStyle[prop];
			// 	}
			// }
			else {				 // 댓글 -> 여러줄 아님
				styleProperties.forEach(prop=>{
					// filteredStyle[prop] = currentStyle.getPropertyValue(prop);
				});
			}


			setCStyle(filteredStyle);
			console.log("json으로 변환~~~", JSON.stringify(cStyle));
			
			return;
		}
		// focusEditor();
	}

	// function focusEditor() {
	// 	if(document.querySelector('.comment-editor')) {
	// 		console.log('댓글', document.querySelector('.comment-editor'));
	// 		ref_editor.current.focus();
	// 	}
	// }

	const changedValues = (e)=>{
		console.log("111111", e.target.textContent);
		if(e.target.textContent != null) {
			console.log("e.target.textContent", e.target.textContent); 
			setInputValue(e.target.textContent);

		}
	}
	
	const submitHandle = (e)=>{
		e.preventDefault();
		
		
		axios.post("http://172.30.1.43:8088/demo/comment"
		, { commentContent: inputValue, commentStyle: cStyle})
		.then((res)=>{
			console.log('전송 성공');

		})
		.catch(()=>{
			alert("통신 실패");
		})
	}


	useEffect(()=>{
		
		
	}, [])


	return (
		<div style={{margin: "0 20%"}}>
			<p>Comment</p>
			<form method='post'>
				<div style={{ display: "flex", alignItems: "center" }}>
					<img src="http://place-hold.it/30x30" style={{ marginRight: "0px" }} />
					<span>닉네임 [style: {JSON.stringify(cStyle)}], [{cStyle.length}]</span>
				</div>
				
				<div>
					{/* 
					{/* (<div> */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('bold')}} style={{fontWeight:"bold"}} >B</button>                 bold 체 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('italic')}} style={{fontStyle:"italic"}}>abc</button>             italic 체 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('underline')}} style={{fontStyle:"italic"}}><u>abc</u></button>   언더라인 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('StrikeThrough')}} ><strike>S</strike></button>                   가운데 줄 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('insertOrderedList')}}>OL</button>                                순서 있는 리스트 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('insertUnorderedList')}}>UL</button>                              순서 없는 리스트 */}
						{/* <span>정렬 : </span> */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('justifyleft')}}>왼쪽 정렬</button>                                왼쪽 정렬 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('justifycenter')}}>가운데 정렬</button>                            가운데 정렬 */}
						{/* <button onClick={(e)=>{e.preventDefault(); setStyle('justifyright')}}>오른쪽 정렬</button>                             오른쪽 정렬 */}
					{/* </div>) */}
					
					{/* <textarea name="" id="" cols="100%" rows="10" style={{width:"100%", resize:"vertical"}}></textarea> */}
					<div className='comment-area'  >
						<div onInput={changedValues} placeholder="댓글 입력하기!" id="comment-input-area"
							className='comment-editor' ref={ref_editor} contentEditable="true" name="commentContent"
							suppressContentEditableWarning={true} 
							style={{width:"80%", height:"30px", resize: "vertical", overflow:"auto", border:"1px solid purple"}}></div>
					</div>

					<div>
						<input type="submit" onClick={submitHandle} value="댓글 작성" />
					</div>
				</div>
			</form>
		</div>
	)

}

export default Comment