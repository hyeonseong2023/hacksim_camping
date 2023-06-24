import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SyLoadBoardItem from './SyLoadBoardItem'

const SyLoadBoardList = () => {
	let link = "https://img.freepik.com/free-photo/grilled-chicken-legs-on-the-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph";
	const [ recentBoardList, setRecentBoardList ] = useState([]);
	const [ cList,setCList ] = useState({});
	const [ filteredList, setFilteredList ] = useState([]);
	const [ likeList, setLikeList ] = useState([]);
	const [ viewsList, setViewList ] = useState([]);

	useEffect(() => {
		// 최신 순
		axios.get("http://localhost:8088/gocamping/comunity")
			.then((res) => {
				const data = res.data;
				setCList(data);
				console.log(res.data)


				const temp = data.slice(data.length - 6).reverse();
				setFilteredList(temp);
				console.log("temp", temp)

			})
			.catch((error) => {
				console.log('통신 실패')
			})

		// 좋아요 순
		axios.get("http://localhost:8088/gocamping/api/comunity/likes")
			.then((res) => {
				const data = res.data;
				console.log("좋아요", data)
				setLikeList(data);
			})
			.catch((error) => {
				console.log('통신 실패')
			})
			
		// 조회수 순
		axios.get("http://localhost:8088/gocamping/api/comunity/views")
			.then((res) => {
				const data = res.data;
				console.log("좋아요", data)
				setViewList(data);
			})
			.catch((error) => {
				console.log('통신 실패')
			})

			
	}, [])
	

	return (
		<div style={{ margin: "0 20px" }}>

			<div style={{ height: "30px" }}></div>
			{/* 좋아요 게시글 */}			
			<div>
				<h4>모두의 캠핑 좋아요 BEST 게시글</h4>
				<div style={{ display: "flex", flexWrap: "wrap", margin: "0 10%" }}>
					{likeList && likeList.map((item) => {
						return (
							<SyLoadBoardItem srcImg={`http://localhost:8088/gocamping/${item.comunity.story_img}`}
								s_title={item.comunity.story_title} s_idx={item.comunity.story_idx} user_email={item.comunity.user_email}
								s_like={item.comunity.story_likes}
								imgWidth={"100%"} imgHeight={"200px"}
								key={item.comunity.story_idx} />

						)
					})}
				</div>
			</div>

			{/* 조회수 게시글 */}			
			<div>
				<h4>모두의 캠핑 조회수 BEST 게시글</h4>
				<div style={{ display: "flex", flexWrap: "wrap", margin: "0 10%" }}>
					{viewsList && viewsList.map((item) => {
						return (
							<SyLoadBoardItem srcImg={`http://localhost:8088/gocamping/${item.comunity.story_img}`}
								s_title={item.comunity.story_title} s_idx={item.comunity.story_idx} user_email={item.comunity.user_email}
								s_view={item.comunity.story_views}
								imgWidth={"100%"} imgHeight={"200px"}
								key={item.comunity.story_idx} />
						)
					})}
				</div>
			</div>

			{/* New 최신글 */}
			<div >
				<h4> 😎 New 최신글</h4>
				<div style={{ display: "flex", flexWrap: "wrap", margin: "0 10%" }}>

					{ filteredList && filteredList.map((item)=>{
						return (
						<SyLoadBoardItem srcImg={`http://localhost:8088/gocamping/${item.comunity.story_img}`}
						s_title={item.comunity.story_title} s_idx={item.comunity.story_idx} user_email= {item.comunity.user_email}
						imgWidth={"100%"} imgHeight={"200px"}
						key={item.comunity.story_idx} />
						)
					})}

				</div>
			</div>

			<div style={{ height: "200px" }}></div>

		</div>
	)
}

export default SyLoadBoardList