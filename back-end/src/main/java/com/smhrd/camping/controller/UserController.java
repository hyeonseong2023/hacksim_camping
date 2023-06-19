package com.smhrd.camping.controller;

// 회원관련 정보 페이지 반환
import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.UserMapper;
import com.smhrd.camping.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
//"http://localhost:3000" 에서 오는 요청 받겠다는 의미
@CrossOrigin("http://localhost:3000")

public class UserController {

	// 의존성 주입(DI) : mapper 객체(구현체)를 외부에서 생성하고 주입시켜서 사용
	@Autowired
	private UserService service;

	@Autowired
	private UserMapper mapper;

//	@RequestMapping(value="/user/join", method=RequestMethod.POST)
//	public String join(@RequestParam("user_email") String user_email, @RequestParam("user_pw") String user_pw) {
//		User us = new User(user_email,user_pw);
//		int cnt = mapper.join(us);
////		service.login(user_email, pw);
//		
//		return "";
//		
//	}

	@GetMapping(value = "/join")
	public String main() { // "/"값으로 요청 들어오면 main반환
		return "join";
	}

	@PostMapping("/join")
	public User Join(@RequestBody User user) {
		String inputEmail = user.getInputEmail();
		String inputPw =user.getInputPw();
		String inputNick =user.getInputNick();
		System.out.println("가입이메일 : "+inputEmail);
		System.out.println("가입비밀번호 : "+inputPw);
		System.out.println("가입닉네임 : "+inputNick);
        service.Join(user);
		return user;
	}
	
	@PostMapping("/login")
	public User Login(@RequestBody User user, @RequestParam("inputEmail") String inputEmail, @RequestParam("inputPw") String inputPw, HttpSession session) {
//		String inputEmail = user.getInputEmail();
//		String inputPw =user.getInputPw();
		System.out.println("로그인이메일 : "+inputEmail);
		System.out.println("로그인비밀번호 : "+inputPw);
		User u = new User(inputEmail, inputPw);
		service.Login(u);
		return u;
	}
	
	// view 반환 x -> data(model) 반환
		// @Controller => view를 반환하는 메서드
		// @Controller + @ResponseBody => model을 반환하는 메서드
		@GetMapping(value="/emailcheck")
		public String emailcheck(@RequestParam("input") String inputEmail) {
			System.out.println(inputEmail);
			
			int result = mapper.emailCheck(inputEmail);
			
			System.out.println(result);
			
			if(result==1) { // 값 ㅇ -> 사용불가능한 이메일
				return "fail"; // 일반 문자열 (view)
			}else{ // 0이 나온다면? -> 사용가능한 이메일
				return "success";
			}
			
		}
	
	
}
