import React, {useContext, useEffect, useState} from 'react'
import axios from "axios"
import { TagContext } from '../context/TagContext';

const TagForm = ({selectingPosX, selectingPosY})=>{
	const [ tagCategoryList, setTagCategoryList ] = useState();
	const [ cStep, setCStep ] = useState();
	const [ inputPN, setInputPN ] = useState('');  // PN -> Product Name
	const [ inputPL, setInputPL ] = useState(''); // PL -> Product Link
	const [ inputPC, setInputPC ] = useState(1); // PC-> Product Category
	const [ isCompleted, setIsCompleted ] = useState(false);

	const {tagLists, setTagLists} = useContext(TagContext);
	const [ isDisable, setIsDisable ] = useState(true);


	const inputStyle = {
		borderRadius: "0px",
	};

	
	useEffect(()=>{
		axios.get("http://localhost:8088/gocamping/comunity/a")
			.then (res=>{
				// console.log(res.data);
				setTagCategoryList(res.data);
			})
			.catch((res)=>{
				alert("통신 실패")
			})
	}, [])

	const handleTagName = (e)=>{
		setInputPN(e.target.value);
		if(inputPN=='' || inputPL=='' || inputPC == 0) {
			if(document.querySelector("#selecting")&&document.querySelector("#selecting").style.opacity==0) {
				setIsDisable(true)
			}
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}

	const handleTagLink = (e)=>{
		setInputPL(e.target.value);
		if(inputPN=='' || inputPL=='' || inputPC == 0) {
			if(document.querySelector("#selecting")&&document.querySelector("#selecting").style.opacity==0) {
				setIsDisable(true)
			}
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}

	const handleTagCategory = (e)=>{
		console.log(e.target.value);
		setInputPC(e.target.value);
		if(inputPN=='' || inputPL=='' || inputPC == 0) {
			if(document.querySelector("#selecting")&&document.querySelector("#selecting").style.opacity==0) {
				setIsDisable(true)
			}
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}

	const handleClickBtn=()=>{
		if(inputPN=='' || inputPL=='' || inputPC == 0) {
			if(document.querySelector("#selecting")&&document.querySelector("#selecting").style.opacity==0) {
				setIsDisable(true)
			}
			setIsDisable(true)
		} else {
			setIsDisable(false)
		}
	}

	const handleOk=(e)=>{
		let dataList = {
			"product_name" : inputPN,
			"product_link" : inputPL,
			"category_idx" : inputPC,
			"poi_x" : selectingPosX,
			"poi_y" : selectingPosY
		}
		setTagLists([...tagLists, dataList])
		// setTagLists((prevTagLists) => [...prevTagLists, dataList])
		console.log(dataList);
	}

	// const handleCancel=(e)=>{
	// 	let arr = [...tagLists];
	// 	arr.splice(-1, 1);
	// 	console.log(arr);
	// }


	return (
		<>
			<div>
				<div style={{backgroundColor:"rgb(248, 222, 255)"}}>
					제품 이름 : <input type="text" onBlur={handleClickBtn} onClick={handleClickBtn} style={inputStyle} onChange={(e)=>{handleTagName(e)}} value={inputPN} /> 
					제품 링크 : <input type="text" onBlur={handleClickBtn} onClick={handleClickBtn} style={inputStyle} onChange={handleTagLink} value={inputPL}/> <br/>
					제품 카테고리 :
					{
						tagCategoryList && <>
						
						<select name="step1" onChange={ (e)=>{ setCStep(e.target.value);handleTagCategory(e)} } id="stpe1">
							{
								tagCategoryList.filter((r) => (r.category_step == 1)).map(r =>
									<option value={r.category_idx} key={r.category_idx}>{r.category_name}</option>
								)
							}
						</select>

						<select name="step2" id="stpe2" onChange={handleTagCategory}>
							{
								tagCategoryList.filter((r) => (r.category_step == 2 && r.super_category == cStep)).map(r =>
									<option value={r.category_idx} key={r.category_idx} >{r.category_name}</option>
								)
							}
						</select>
						</>
					}
					&nbsp;&nbsp;x좌표 : {selectingPosX}%, y좌표 : {selectingPosY}%
					<button id="cancelTag" onClick={()=>{setIsCompleted(!isCompleted)}}>취소</button>
					<button id="addTag" onClick={e=>{e.preventDefault(); setIsCompleted(!isCompleted);
							handleOk();
						}} disabled={isDisable}>확인</button>

					
				</div>
				{/* <hr/>
				<p> "product_name" : {inputPN}</p>
				<p> "product_link" : {inputPL}</p>
				<p> "category_idx" : {inputPC}</p>
				<p> "poi_x" : {selectingPosX}</p>
				<p> "poi_y" : {selectingPosY}</p>

				리스트 목록 : {JSON.stringify(tagLists)} */}
			</div>
		</>
	)
}

export default TagForm