package com.smhrd.camping.controller;


import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.Tags;
import com.smhrd.camping.service.ComunityService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ComunityRestController {
	//service 의존성 주입
	@Autowired
	private ComunityService service;
	
	//게시판 게시물 목록 조회
	@GetMapping("/comunity")
	public JSONArray ComunityList() {
		JSONArray array = service.ComunityList();		
		return array;
	}
	
	
//	@GetMapping("/api/getTags/{story_idx}")
//	public JSONObject ComunityListOne(@PathVariable("story_idx")int story_idx) {
//		System.out.println("controller" + story_idx);
//		JSONObject obj = service.ComunityListOne(story_idx);		
//		return obj;
//	}

	// 게시판 내림차순
	@GetMapping("/comunity/listDesc/{num}")
	public JSONArray ComunityListDesc(@PathVariable("num") int page) {
		System.out.printf("%d페이지\n", page);
		JSONArray array = service.ComunityListDesc(page);		
		return array;
	}
	
	// 게시판 내림차순(갯수)
	@GetMapping("/comunity/listDescCount")
	public int ComunityListDescCount() {
		return service.ComunityListDescCount();
	}

	//상세 게시물 조회
	@GetMapping("/comunity/{idx}")
	public ResponseEntity<Comunity> ComunityOne(@PathVariable("idx") int idx) {
		Comunity comunity = service.ComunityOne(idx);
		if(comunity != null) {
			System.out.println("성공");
			return ResponseEntity.ok(comunity);
		}
		else {
			System.out.println("실패");
			return ResponseEntity.notFound().build();
		}
	}
		

	



	 //게시판 글 작성 데이터 삽입하기
	@PostMapping("/comunity/write")
	public ResponseEntity<?> write(@RequestParam("story_title") String story_title,
			@RequestParam("user_email") String user_email, @RequestParam("story_category") String story_category,
			@RequestParam("story_content") String story_content,
			@RequestPart(name = "story_img") List<MultipartFile> file,
			@RequestParam(value = "tagLists", required = false) String jsonString) {
		Tags[] tags = null;
//	   System.out.println("jsonString"+jsonString);
		if (!jsonString.equals("[]")) {
//		    System.out.println("jsonString의 길이" + jsonString.length());
			System.out.println("null 아님");
			ObjectMapper objectMapper = new ObjectMapper();
			try {
				tags = objectMapper.readValue(jsonString, Tags[].class);
			} catch (IOException e) {
				System.out.println("입출력 에러");
				e.printStackTrace();
			}
		} else {
			System.out.println("null입니다.");
		}

		System.out.println("type:" + jsonString.getClass().getName());

		Comunity write = null;
		int cnt = 0;
		if (tags == null) {
			System.out.println("tags = null");
			// boardInsert 메서드에 매개변수들 전달
			write = service.write(story_title, story_content, file, user_email, story_category);
			
		} else {
			System.out.println("tags = null 아님");
			write = service.write(story_title, story_content, file, user_email, story_category);
			System.out.println("업로드 성공, story_idx : "+write.getStory_idx()+" 제목 : "+write.getStory_title());
			
			for(Tags t : tags) {
				t.setStory_idx(write.getStory_idx());
				
				
				service.addTags(t);
				cnt++;
			}
		}
		System.out.printf("%d개의 태그가 등록 됨", cnt);
		return ResponseEntity.ok(write); // 예시로 간단히 응답만 반환하도록 설정

	}

	
	 

	//??
	@GetMapping("/comunity/a")
	public String category() { //carray : 카테고리 스텝 array
		String carray = service.CategoryStep();
		return carray;
		
	}
	
	
	@GetMapping("/api/comunity/likes")
	public JSONArray loadCommunityLike() {
		JSONArray array = service.LoadCommunityLike();
		
		return array;
	}
	
	@GetMapping("/api/comunity/views")
	public JSONArray loadCommunityView() {
		JSONArray array = service.LoadCommunityView();
		
		return array;
	}
	

	//댓글 작성
	@PostMapping("/comunity/{idx}/comment")
    public ResponseEntity<Integer> comment(@PathVariable("idx") int idx, @RequestBody Map<String, Object> paramMap) {
		System.out.println("aaa");
		
		String cmt_content = (String) paramMap.get("cmt_content");
		String email = (String)paramMap.get("user_email");
        int cmt = service.comment(idx, cmt_content, email);
  
        return ResponseEntity.ok(Integer.valueOf(cmt));
    }
	
	
	//댓글 목록 조회
	@GetMapping("/comunity/{idx}/comment1")
	public ResponseEntity<List<Comment>> CommentList(@PathVariable("idx") int idx){
		
		List<Comment> cmt = service.CommentList(idx);
		return ResponseEntity.ok(cmt);
	}
	
	
	

	
	//게시물 검색 조회
	@GetMapping("/comunity/search")
	public ResponseEntity<List<Comunity>> searchComunity(@RequestParam("query") String query){
		System.out.println("입력값 : " + query);
		List<Comunity> comunity = service.searchComunity(query);
	    return ResponseEntity.ok(comunity);
	}

	// 게시글 조좋유 순
	@GetMapping("/comunity/sort/{idx}")
	public ResponseEntity<List<Comunity>> sortedComunity(@RequestParam("mode") String mode) {
		System.out.println("무슨 버튼 눌렀니 : " + mode);
		List<Comunity> comunity = service.sortedComunity(mode);
	  return ResponseEntity.ok(comunity);
	}

	
			//내가 작성한 댓글 삭제
			@PostMapping("/comunity/{cmtIdx}/delete")
			public int CommentDelete(@PathVariable("cmtIdx") int cmt_idx, @RequestBody Map<String, Object> user_email){
				String email = (String)user_email.get("user_email");
				System.out.println("controller"+email);
				return service.CommentDelete(cmt_idx, email);
				
			}
	
	
	
}
