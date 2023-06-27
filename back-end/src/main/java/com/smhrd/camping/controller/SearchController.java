package com.smhrd.camping.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.catalina.mapper.Mapper;
import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.Tags;
import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.SearchMapper;
import com.smhrd.camping.mapper.UserMapper;
import com.smhrd.camping.service.ComunityService;
import com.smhrd.camping.service.SearchService;
import com.smhrd.camping.service.UserService;

@RestController
//"http://localhost:3000" 에서 오는 요청 받겠다는 의미
@CrossOrigin(origins="http://localhost:3000")
@ControllerAdvice
public class SearchController {

	
	@Autowired
	private SearchService service;

	@Autowired
	private ComunityService service2;
	
	// 링크가져오기
	@Autowired
	   private SearchService poiservice;
	
	@Autowired
	private SearchMapper mapper;
	
	
	// 링크 가져오기
	  @PostMapping("/getlink")
      public String getLink(@RequestBody Tags story_idx) {
         
         int getlink = story_idx.getStory_idx();
         String linkdata = poiservice.getLink(getlink);

         if(linkdata != null) {
            System.out.println("링크성공");
            return linkdata;
         }
         else {
            System.out.println("링크실패");
            return null;
         }
      }
	  
	  
	//검색창 검색기능
	@PostMapping("/search")
	public ResponseEntity<List<Comunity>> Search(@RequestBody Comunity story_content) {
		List<Comunity> searchData = new ArrayList<>();
	   
	    String getWorld = story_content.getStory_content();
	    System.out.println(getWorld);
	    searchData = service.Search(getWorld);
	    
	    if (searchData != null) {

	    	System.out.println("조회된 게시글 : "+searchData.size());
	        return ResponseEntity.ok(searchData); // 나중에 return 값 수정
	    } else {
	        System.out.println("리스트 출력 실패");
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        		
	    }
	}
	
	
	//마이페이지 - 내가 쓴 글 출력 기능
	@PostMapping("/mystory")
	public ResponseEntity<List<Comunity>> Search(@RequestBody User user_email) {
		List<Comunity> searchData = new ArrayList<>();
	   
	    String  user_email1 = user_email.getUser_email();
	    System.out.println(user_email1);
	    searchData = service.myStory(user_email1);
	    
	    if (searchData != null) {

	    	System.out.println("조회된 게시글 : "+searchData.size());
	        return ResponseEntity.ok(searchData); // 나중에 return 값 수정
	    } else {
	        System.out.println("리스트 출력 실패");
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
	        		
	    }
	}
	
	
}