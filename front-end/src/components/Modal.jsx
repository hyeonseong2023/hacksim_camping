import React, { useEffect, useRef } from 'react'
import '../Modal.css';
import axios from 'axios';
const Modal = ({setModalOpen,innerContent,setInnerContent, userCommentList,selectedValue,content}) => {

// let getValue=value;
  // 모달 끄기 
  const closeModal = () => {
    setModalOpen(false);
};

  // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };
        
        // 이벤트 핸들러 등록
        document.addEventListener('mousedown', handler);
        // document.addEventListener('touchstart', handler); // 모바일 대응
        
        return () => {
            // 이벤트 핸들러 해제
            document.removeEventListener('mousedown', handler);
            // document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });


    //댓글 수정 내용
    const contentHandler = (e)=>{
        setInnerContent(e.target.value)
        console.log('수정 댓글 내용 : ',e.target.value);
    }

    const commentUpdate = (e) => {
  console.log('모달창 수정번호 :',selectedValue);
   setModalOpen(false);
       
        axios.post("/gocamping/updatecoment", 
        { cmt_idx: selectedValue,cmt_content:innerContent})
          .then((res) => {
            userCommentList();
    
    
          })
          .catch(error => {
            console.error(error); // 오류 발생 시 에러 로그를 출력
            alert('댓글 수정 실패😥')
    
          });
        }





return (
    <td className="container">
      <span>수정할 내용을 입력하세요</span>
         <input placeholder={content} type='text' onChange={contentHandler}/>
         <button  onClick={commentUpdate}>수정</button>
        <button  className="close" onClick={closeModal}>
            X
        </button>
      
    </td>
);
}
  
  


export default Modal