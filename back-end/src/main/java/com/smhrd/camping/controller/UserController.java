package com.smhrd.camping.controller;

// 회원관련 정보 페이지 반환
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.UserMapper;
import com.smhrd.camping.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
//"http://localhost:3000" 에서 오는 요청 받겠다는 의미
@CrossOrigin("http://localhost:3000")
@ControllerAdvice
public class UserController {

	// 의존성 주입(DI) : mapper 객체(구현체)를 외부에서 생성하고 주입시켜서 사용
	@Autowired
	private UserService service;

	@Autowired
	private UserMapper mapper;
	
	@PostMapping("/join")
	public int Join(@RequestBody User user) {
		String inputEmail = user.getUser_email();
		String inputPw =user.getUser_pw();
		String inputNick =user.getUser_nick();
		System.out.println("가입이메일 : "+inputEmail);
		System.out.println("가입비밀번호 : "+inputPw);
		System.out.println("가입닉네임 : "+inputNick);
        int cnt =service.Join(user);
		return   cnt;
	}
	

	
	@PostMapping("/login")
	public ResponseEntity<User> Login(@RequestBody User user) {
		String inputEmail = user.getUser_email();
		String inputPw =user.getUser_pw();
		System.out.println("로그인이메일 : "+inputEmail);
		System.out.println("로그인비밀번호 : "+inputPw);

		User loginUser = mapper.Login(user);
        if(loginUser!=null) {
        
        	System.out.println("로그인성공");
        	System.out.println("가입일 : "+loginUser.getUser_joindate());
        	System.out.println("닉네임 : "+loginUser.getUser_nick());
        	System.out.println("회원구분 : "+loginUser.getUser_role());
        	return ResponseEntity.ok(loginUser);
        	
        }else {
        	System.out.println("로그인실패");
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
        }
	
	
	//회원가입 이메일 중복 체크
	@GetMapping(value="/emailcheck")
	public String emailcheck(@RequestParam("input") String user_email) {
		System.out.println(user_email);
		
		int result = mapper.emailCheck(user_email);

		
		System.out.println(result);
		
		if(result==1) { // 값 ㅇ -> 사용불가능한 이메일
			return "fail"; // 일반 문자열 (view)
		}else{ // 0이 나온다면? -> 사용가능한 이메일
			return "success";
		}
		
	}
	
	
	
}
