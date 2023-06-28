import React, { useState, useEffect } from "react";
import axios from "axios";
// import "../AllStory.css";

const AllStory = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchAllStory();
  }, []);

  const fetchAllStory = async () => {
    try {
      const response = await axios.post("/gocamping/allStory");
      setStories(response.data);
    } catch (error) {
      console.error("게시글 정보 출력 실패", error);
    }
  };

  const handleDelete = async (user_email) => {
    try {
      const response = await axios.post(
        "/gocamping/deleteStory",
        { user_email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      fetchAllStory();
    } catch (error) {
      console.error("게시글 삭제 실패", error);
    }
  };

  return (
    <>
      <h1>모든 게시글 정보</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="center-align">글 번호</th>
            <th className="center-align">제목</th>
            <th className="center-align">내용</th>
            <th className="center-align">카테고리</th>
            <th className="center-align">이메일</th>
            <th className="center-align">삭제</th>
          </tr>
        </thead>
        <tbody>
          {stories.map((story, index) => (
            <tr key={index}>
              <td className="right-align">{story.story_idx}</td>
              <td className="right-align">{story.story_title}</td>
              <td className="right-align">{story.story_content}</td>
              <td className="right-align">{story.story_category}</td>
              <td className="center-align">{story.user_email}</td>
              <td className="center-align">
                <button
                  className="deleteBtn"
                  onClick={() => handleDelete(story.user_email)}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AllStory;
