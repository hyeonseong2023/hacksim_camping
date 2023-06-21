// import React from 'react'
// import { useNavigate, useSearchParams } from "react-router-dom";

// const SearchBar = () => {

//   const [searchKeyWord, setSearchKeyWord] = useState("");

//      // useSearchParams는 URL에 쿼리 스트링을 입력해준다.
//   const [searchParams, setSearchParams] = useSearchParams();
  
//   const navigate = useNavigate();

//   // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchKeyWord(e.target.value);
//   };

//   const searchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//   // 검색 키워드가 존재하는 경우에만 setState를 진행한다.
//   if (!!searchKeyWord) {
//     setSearchParams({
//       keyword: searchKeyWord,
//     });
//   } else {
//     // 검색 키워드가 존재하지 않는 경우, 쿼리 스트링이 없는 원래 URL을 보여주도록 navigate 처리한다.
//     navigate(`${props.purpose === "lecture" ? "/lecture" : "/qa"}`);
//   }
// };



//   return (
//     <div>SearchBar</div>
//   )
// }

// export default SearchBar