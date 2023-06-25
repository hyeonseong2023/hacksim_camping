package com.smhrd.camping.controller;

import java.util.ArrayList;
import java.util.List;

// 회원관련 정보 페이지 반환
import org.apache.catalina.mapper.Mapper;
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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.AdminMapper;
import com.smhrd.camping.service.AdminService;

import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@ControllerAdvice
public class AdminController {

	@Autowired
	private AdminService service;

	@Autowired
	private AdminMapper mapper;

	// 모든 회원 정보 불러오기
	@PostMapping("/allUser")
	public ResponseEntity<List<User>> allUser() { // 매개변수 수정
		List<User> allUser = new ArrayList<>();
		allUser = service.allUser();

		if (allUser != null) {
			System.out.println("모든 회원 정보 수 : " + allUser.size());
			return ResponseEntity.ok(allUser);
		} else {
			System.out.println("리스트 출력 실패");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}

	// 선택한 회원 정보를 삭제하는 메소드
	@PostMapping("/deleteUser")
	public ResponseEntity<String> deleteUser(@RequestBody User user) {

		boolean result = service.deleteUser(user);

		if (result) {
			System.out.println("회원 정보 삭제 완료");
			return ResponseEntity.ok("회원 정보 삭제 완료");
		} else {
			System.out.println("회원 정보 삭제 실패");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("회원 정보 삭제 실패");
		}
	}

	// 모든 게시글 정보를 가져오는 메소드
	@PostMapping("/allStory")
	public ResponseEntity<List<Comunity>> allStory() {
		List<Comunity> allStory = new ArrayList<>();
		allStory = service.allStory();

		if (allStory != null) {
			System.out.println("모든 게시글 정보 수 : " + allStory.size());
			return ResponseEntity.ok(allStory);
		} else {
			System.out.println("리스트 출력 실패");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		}
	}

	// 선택한 게시글 정보를 삭제하는 메소드
	@PostMapping("/deleteStory")
	public ResponseEntity<String> deleteStory(@RequestBody Comunity story) {
		boolean result = service.deleteStory(story);

		if (result) {
			System.out.println("게시글 삭제 완료");
			return ResponseEntity.ok("게시글 삭제 완료");
		} else {
			System.out.println("게시글 삭제 실패");
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("게시글 삭제 실패");
		}
	}

}