import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const BoardCreate = () => {
  const [story_title, setStoryB_Title] = useState('');
  const [story_content, setStoryB_Content] = useState('');
  const [story_img, setStory_img] = useState([]);
  const [story_category, setStory_category] = useState('');
  const [user_email, setUser_email] = useState('');
  const [previewImages, setPreviewImages] = useState([]);
  const nav = useNavigate();

  const handleSubmit = () => {
    
    const formData = new FormData();
    formData.append('story_title', story_title);
    formData.append('story_content', story_content);
    formData.append('story_category', story_category);
    formData.append('user_email', user_email);
    
    for (let i = 0; i < story_img.length; i++) {
      formData.append('story_img', story_img[i]);
    }

    axios
      .post('http://172.30.1.43:8088/gocamping/comunity/write', formData)
      .then((res) => {
        console.log(res.data);
        alert('등록되었습니다.');
        setStoryB_Title('');
        setStoryB_Content('');
        setStory_img([]);
        setPreviewImages([]);
		setStory_category('');
		setUser_email('');
		
		
      })
      .catch((error) => {
        console.error(error);
        alert('Error!');
		console.log(formData);
      });
  };

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    const imagesArray = Array.from(selectedImages);
    setStory_img(imagesArray); // 선택한 파일들을 상태에 저장

    const previewArray = [];
    for (let i = 0; i < imagesArray.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        previewArray.push(reader.result); // 미리보기 이미지를 배열에 추가
        if (previewArray.length === imagesArray.length) {
          setPreviewImages(previewArray); // 모든 미리보기 이미지 저장
        }
      };
      reader.readAsDataURL(imagesArray[i]); // 파일을 읽어와서 미리보기 이미지 생성
    }
  };

  const backBoardList = () => {
    alert('글 작성을 취소합니다.');
    nav('/community/boardlist');
  };

  return (
    <div>
      <h5>BoardCreate</h5>
      {/* 자유게시판 글 작성 폼 */}
      <form action='/' onSubmit={handleSubmit}>
        <div>
          <label>제목 : </label>
          <input
            type="text"
            
            value={story_title}
            onChange={(e) => setStoryB_Title(e.target.value)}
            placeholder="제목을 입력하세요"
          />
        </div>

		<div>
			<label>작성자 :</label>
			<input type="text" value={user_email} onChange={(e)=> setUser_email(e.target.value)} />
		</div>

		<div>
			<label> 카테고리</label>
			<input type="text" value={story_category} onChange={(e)=> setStory_category(e.target.value)} />
		</div>

        <div>
          <label>내용 : </label>
          <textarea
            
            value={story_content}
            onChange={(e) => setStoryB_Content(e.target.value)}
            placeholder="내용을 입력하세요"
          ></textarea>
        </div>

        <div>
          <label htmlFor="b_file">이미지 업로드</label>
          <input
            type="file"
            
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        {previewImages.map((previewImage, index) => (
          <div key={index}>
            <p>이미지 미리보기 {index + 1}</p>
            <img src={previewImage} alt={`Preview ${index + 1}`} width="200" />
          </div>
        ))}

        <div>
          <button type="submit">글 등록</button>
          <button onClick={backBoardList}>작성 취소</button>
        </div>
      </form>
    </div>
  );
};

export default BoardCreate;