import React, { Fragment, useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios';
import cursor from "../circle.gif";

const Write = () => {
   const [photoZone, setPhotoZone] = useState("");
   const [imageUrl, setImageUrl] = useState('https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph');
   const [selectedFile, setSelectedFile] = useState(null); // 사진 파일이 선택 되었는가?
   const [test, setTest] = useState("https://img.freepik.com/free-photo/camping-tents-under-pine-trees-with-sunlight-at-pang-ung-lake-mae-hong-son-in-thailand_335224-929.jpg?size=626&ext=jpg&ga=GA1.1.1498143191.1686661170&semt=sph")
   const [isImageLoaded, setIsImageLoaded] = useState(false);
   const [mouseX, setMouseX] = useState(0);
   const [mouseY, setMouseY] = useState(0);
   const [tagCategoryList, setTagCategoryList] = useState([]);
   const [cStep, setCStep] = useState(0);
   const [story_title, setStory_title] = useState('');
   const [story_writer, setStroy_writer] = useState('');
   const [story_content, setStory_content] = useState('');
   const [story_img, setStory_img] = useState(null);
   const [isChecked, setIsChecked] = useState(false);
   const [isClickedX, setIsClickedX] = useState(0);
   const [isClickedY, setIsClickedY] = useState(0);
   let a = 0;
   let b = 0;

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



   const handleImageLoad = () => {
      setIsImageLoaded(true);
   };

   const handleSubmit = (e) => { // 글올리기 요청
      e.preventDefault();
      // const requestData ={
      //    story_title : story_title,
      //    story_writer : story_writer,
      //    story_content : story_content
      // }
      const formData = new FormData();
      formData.append("story_title", story_title);
      formData.append("story_writer", story_writer);
      formData.append("story_content", story_content);

      console.log("1", story_title)
      console.log("2", story_writer)
      console.log("3", story_content)

      formData.append('file', story_img);
      console.log("4 story_img", formData.get("file"))

      axios.post('http://172.30.1.43:8088/gocamping/comunity/write', formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      })
         .then((res) => {
            // alert('통신 성공!')
            console.log(res)
         })
         .catch((e) => {
            alert('통신 실패')
         })
   }




   const getTagCategory = (e) => {
      axios.get("http://172.30.1.43:8088/gocamping/comunity/a")
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

   const imgCoordinate = (e)=>{
      
   }


   // if(document.querySelector("clickDiv")) {
   //    let divVal = document.querySelector("clickDiv");

   //    divVal.addEventListener("click", (e)=>{
   //       console.log("div클릭")
   //       setIsClickedX(e.nativeEvent.offsetX); setIsClickedY(e.nativeEvent.offsetY)
   //    })
      
      
   // }


   return (
      <div className='write'>
         <select onChange={(e) => { console.log(e.target.value) }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
         </select>
         <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
            <div className="story-header">
               <p>제목</p>
               <input onChange={(e) => setStory_title(e.target.value)} type='text' name="story_title"></input>
               <p>작성자{story_writer}{story_content}</p>
               <input onChange={(e) => setStroy_writer(e.target.value)} type='text'></input>
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
                     <div className='content-left' onClick={
                        (e) => {
                           // console.log("X는", e.nativeEvent.offsetX,", y는", e.nativeEvent.offsetY)
                           if (document.getElementById("test")) {
                              let itsW = document.getElementById("test").clientWidth;
                              let itsH = document.getElementById("test").clientHeight;
                              let posX = e.nativeEvent.offsetX - (Number(itsW) / 2) + "px"
                              let posY = e.nativeEvent.offsetY - (Number(itsH) / 2) + "px"
                              // console.log("실행?dfdfddfdfdfdf", 1, e.nativeEvent.offsetX, 2, Number(itsW), 3, posX)                           
                              document.getElementById("test").style.left = posX
                              document.getElementById("test").style.top = posY
                           }
                        }}>
                        <div style={{display:"inline-block", position:"relative"}} id='clickDiv'
                           onClick={(e)=>{
                              imgCoordinate(e);
                              // console.log("div클릭")
                              // setIsClickedX(e.nativeEvent.offsetX); setIsClickedY(e.nativeEvent.offsetY)
                           }}>


                           <img src={imageUrl} onMouseMove={(e) => {
                              if (document.querySelector("#imgClickCursor")) {
                                 let itsW = document.querySelector("#imgClickCursor").clientWidth;
                                 let itsH = document.querySelector("#imgClickCursor").clientHeight;
                                 // let posX = e.nativeEvent.offsetX - (Number(itsW) / 2) + "px"
                                 // let posY = e.nativeEvent.offsetY - (Number(itsH) / 2) + "px"
                                 // console.log("동그라미 크기 : ")
                                 let posX = e.nativeEvent.offsetX - (Number(itsW) / 2)+"px"
                                 let posY = e.nativeEvent.offsetY - (Number(itsH) / 2)+"px"
                                 a = e.nativeEvent.offsetX;
                                 b = e.nativeEvent.offsetY;
                                 document.querySelector("#imgClickCursor").style.left = posX
                                 document.querySelector("#imgClickCursor").style.top = posY
                                 


                              }
                           }} onClick={(e) => {
                              console.log("사진 클릭함")
                              console.log(e);
                              // let aaa = document.querySelector("#imgClickCursor").style.left;
                              // let bbb = document.querySelector("#imgClickCursor").style.top;
                              // console.log("동그라미 위치 X : ", aaa, "Y : ", bbb);
                              // setIsClickedX(e.nativeEvent.offsetX); setIsClickedY(e.nativeEvent.offsetY)
                           }}

                              className='photo-content-img' />



                           {/* 사진이 추가되면, 커서 */}
                           {isChecked && (<img src={cursor} id='imgClickCursor'
                              style={{ position: "absolute", width: "30px", height: "30px", left: "0px", top: "-100px"}}
                              onClick={(e)=>{ 
                                 console.log("동그라미 클릭함")
                                 let aaa = document.querySelector("#imgClickCursor").style.left;
                                 let bbb = document.querySelector("#imgClickCursor").style.top;
                                 console.log("동그라미 위치 X : ", aaa, "Y : ", bbb);
                                 setIsClickedX(a);
                                 setIsClickedY(b)

                               }}/>)}

                           <div className='imgClickCursor'
                              style={{ width: isChecked ? "20px" : "0px", height: isChecked ? "20px" : "0px" }}> </div>
                        </div>
                     </div>
                  )}
               <img src={imageUrl} onLoad={handleImageLoad} style={{ display: 'none' }} />
               <div className="content-right">
                  <textarea style={{ resize: "none" }} onChange={(e) => { setStory_content(e.target.value) }} name="story_content" cols="30" rows="10" placeholder='내용을 입력해주세요!' />
               </div>
            </div>
            <div>
               <button onClick={(e) => { e.preventDefault(); setIsChecked(!isChecked) }} >태그 추가하기!</button>



               {selectedFile &&
                  (
                     <>
                        <button onClick={(e) => {
                           e.preventDefault();
                           tagCategoryList.filter((r) => r.category_step == 1).map(r => console.log(r))
                        }}>1스텝
                        </button>
                        <button onClick={(e) => {
                           e.preventDefault();
                           tagCategoryList.filter((r) => r.category_step == 2).map(r => console.log(r))
                        }}>2스텝
                        </button>
                        <select name="step1" onChange={(e) => { setCStep(e.target.value) }} id="stpe1">
                           {
                              tagCategoryList.filter((r) => (r.category_step == 1)).map(r =>
                                 <option onClick={(e) => { console.log(e) }} value={r.category_idx}>{r.category_name}</option>
                              )
                           }
                        </select>

                        <select name="step2" id="stpe2">
                           {
                              tagCategoryList.filter((r) => (r.category_step == 2 && r.super_category == cStep)).map(r =>
                                 <option value={r.category_name}>{r.category_name}</option>
                              )
                           }
                        </select>

                     </>
                  )
               }

               {isChecked && (
                  <div>
                     <div>
                        제품 이름 : <input type='text' /> &nbsp;&nbsp;제품 링크 : <input type='text' />, 좌표: x({isClickedX}), y({isClickedY})
                     </div>
                  </div>
               )}

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
               <input type="submit" name="story_upload" value="글 등록하기" />
            </div>


            <hr />




         </form>

      </div>
   )
}

export default Write