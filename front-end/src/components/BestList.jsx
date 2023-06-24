import React, { useState, useEffect } from "react";
import axios from "axios";
import "../BestList.css";

const BestList = () => {
  const [comunity, setComunity] = useState([]);
  const [sortMode, setSortMode] = useState("recent");

  const fetchComunity = (mode) => {
    axios
      .get(`http://localhost:8088/gocamping/comunity/sort?mode=${mode}`)
      .then((res) => {
        console.log("Sorted API Response:", res.data);
        setComunity(res.data);
      })
      .catch((error) => {
        console.log("Sorted API Error:", error);
      });
  };

  const handleSortModeChange = (mode) => {
    setSortMode(mode);
    fetchComunity(mode);
  };

  useEffect(() => {
    fetchComunity(sortMode);
  }, []);

  return (
    <div className="container">
      <div className="button-container">
        <button onClick={() => handleSortModeChange("views")}>조회순</button>
        <button onClick={() => handleSortModeChange("likes")}>좋아요순</button>
        <button onClick={() => handleSortModeChange("usefuls")}>유용해요순</button>
      </div>
      <ul>
        {comunity.map((com, index) => (
          <li key={index}>
             <img src={`http://localhost:8088/gocamping/${com.story_img}`} alt={`Image ${index}`} />
            <h3>{com.story_title}</h3>
            <p>{com.story_content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BestList;
