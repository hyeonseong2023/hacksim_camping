import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, json, useParams } from "react-router-dom"
import "../App.css"
const StoryList2 = () => {
	const [sList, setSList] = useState([]);
	const [pageLen, setPageLen] = useState(0);
	const { page } = useParams();
	console.log("page", typeof page)


	useEffect(() => {

		axios.get("http://localhost:8088/gocamping/comunity/listDescCount")
			.then((a) => {
				console.log("개시판 갯수", a.data)
				let page = (Number(a.data)/5)+(Number(a.data)%5==0? 0 : 1);
				setPageLen(page);

			})

		axios.get(`http://localhost:8088/gocamping/comunity/listDesc/${page}`)
			.then((res) => {
				console.log(typeof res)
				// console.log(JSON.stringify(res))
				console.dir(res.data)
				setSList(res.data)
				console.log(" 글 정보 ", res.data.length)
			})






	}, [])

	return (
		<div className='slist-page'>
			<p style={{ textAlign: "center", letterSpacing: "5px" }} >{page}페이지</p>
			<div className='slist-pagebar'>
				
				{
					(Number(page) - 2 > 0) && (
						<>
							<a href={`http://localhost:3000/comunity/list/${Number(page)-2}`}>{Number(page) - 2}</a>
						</>
					)
				}
				{
					(Number(page) - 1 > 0) && (
						<>
							<a href={`http://localhost:3000/comunity/list/${Number(page)-1}`}>{Number(page) - 1}</a>
						</>
					)
				}
					<a href={`http://localhost:3000/comunity/list/${Number(page)}`}>{page}</a>
				{
					Number(page)+1<=pageLen && (
						<>
							<a href={`http://localhost:3000/comunity/list/${Number(page)+1}`}>{Number(page) + 1}</a>
						</>
					)
				}
				{
					Number(page)+2<=pageLen && (
						<>
							<a href={`http://localhost:3000/comunity/list/${Number(page)+2}`}>{Number(page) + 2}</a>
						</>
					)
				}

				
			</div>
			<table className='slist-container'>
				<thead>
					<tr className='slist-header'>
						<th>NO</th>
						<th>글 제목</th>
						<th>작성자</th>
						
					</tr>
				</thead>
				<thead>
					{sList && (
						sList.map((item) => {
							return (
								<tr className='slist-body' key={item.comunity.story_idx}>
									<td><Link to={`http://localhost:3000/comunity/ContentDetail/${item.comunity.story_idx}`}>{item.comunity.story_idx}</Link></td>
									<td><Link to={`http://localhost:3000/comunity/ContentDetail/${item.comunity.story_idx}`}>{item.comunity.story_title}</Link></td>
									<td>{item.comunity.user_email}</td>
									
								</tr>)
						})
					)}
				</thead>
			</table>
			{/* <div className='slist-pagebar'>
            <Link to="http://localhost:3000/StoryList2/1">1</Link>
            <Link to="http://localhost:3000/StoryList2/2">2</Link>
            <Link to="http://localhost:3000/StoryList2/3">3</Link>
            <Link to="http://localhost:3000/StoryList2/4">4</Link>
            <Link to="http://localhost:3000/StoryList2/5">5</Link>
        </div> */}

		</div>
	)
}

export default StoryList2