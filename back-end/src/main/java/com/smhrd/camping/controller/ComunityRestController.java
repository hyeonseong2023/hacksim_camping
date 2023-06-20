package com.smhrd.camping.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.service.ComunityService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ComunityRestController {

	@Autowired
	private ComunityService service;
	
	@GetMapping("/comunity")
	public JSONArray ComunityList() {
		JSONArray array = service.ComunityList();
		
		return array;
	}
	
	@GetMapping("/{idx}")
	public JSONObject ComunityOne(@PathVariable("idx") int idx) {
		return service.ComunityOne(idx);
	}
	
	//게시글 업로드 주석
//	@PostMapping("/comunity/write")
//	public String write(Comunity c, @RequestParam(value="imageUrl", required=true) MultipartFile file) {
//		String newFileName = UUID.randomUUID().toString() + file.getOriginalFilename();
//		// 이미지 file -> 저장(지정된 경로에)
//		try {
//			file.transferTo(new File(newFileName));
//			
//			
//		}catch(IllegalStateException e) {
//			e.printStackTrace();
//		}catch(IOException e) {
//			e.printStackTrace();
//		}
//		
//		c.setStory_img(newFileName);
//		//c(Comunity) -> title, ~~~~ photo(filename)
//		//comunity table(DB) -> 랜덤숫자+파일 이름만 저장
//		int cnt = service.write(c);
//		
//		if(cnt>0) {
//			return "/comunity";
//		}
//		else {
//			return "/";
//		}
//		
//	}
	
	 //게시판 글 작성 데이터 삽입하기
	   @PostMapping("/comunity/write")
	   public ResponseEntity<?> write(@RequestParam("story_title") String story_title,
			 @RequestParam("user_email") String user_email,
			 @RequestParam("story_category") String story_category,
	         @RequestParam("story_content") String story_content ,
	         @RequestPart(name="story_img") List<MultipartFile> file) 
	      
	   {
	      
	      // boardInsert 메서드에 매개변수들 전달
	      Comunity write = service.write(story_title, story_content, file, user_email, story_category); 
	       
	       return ResponseEntity.ok(write); // 예시로 간단히 응답만 반환하도록 설정
	      
	   }

	
	
	@GetMapping("/comunity/a")
	public String category() { //carray : 카테고리 스텝 array
		String carray = service.CategoryStep();
		return carray;
		
	}
	@PostMapping("/comunity/comment")
	public int comment(Comment m) {
		int cmt = service.comment(m);
		return cmt;
	}
	
	@GetMapping("/comunity/b")
	public String CommentList() {
		System.out.println("성공");
		String comment_array = service.CommentList();
		return comment_array;
		
	}

	
	
}
