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

import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.UserMapper;
import com.smhrd.camping.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
//"http://localhost:3000" 에서 오는 요청 받겠다는 의미
@CrossOrigin(origins="http://localhost:3000")
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
		String inputType =user.getUser_type();
		System.out.println("가입이메일 : "+inputEmail);
		System.out.println("가입비밀번호 : "+inputPw);
		System.out.println("가입닉네임 : "+inputNick);
		
        int cnt =service.Join(user);
		return cnt;
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
	
	

	
	@PostMapping("/snslogin")
	public ResponseEntity<User> SnsLogin(@RequestBody User user) {
		String inputEmail = user.getUser_email();
		String inputPw =user.getUser_pw();
		System.out.println("로그인이메일 : "+inputEmail);

		User loginUser = mapper.SnsLogin(user);
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

		// 회원 정보를 업데이트하는 메서드 => 일단 세션 안씀
		@PostMapping("/update")
		public ResponseEntity<String> update(@RequestBody User requestData) {
		  // 실제로 업데이트 처리를 수행합니다.
			System.out.println(requestData.getUser_nick());
			System.out.println(requestData.getUser_pw());
			System.out.println(requestData.getUser_email());
			
		  int result = mapper.update(requestData);

		  if (result > 0) { // 성공적으로 업데이트되면 로그인 세션 정보도 업데이트합니다.
		    return ResponseEntity.ok("회원 정보 수정 완료");
		  } else {
		    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원 정보 수정 실패");
		  }
		}

		// 회원탈퇴
		@PostMapping(value = "/delete")
		public int delete(@RequestBody User user) {
//		    User user = new WebMember(email);
			int deleteUser = mapper.delete(user);

			return deleteUser;
		}

		
		
//		@PostMapping("/login")
//		public ResponseEntity<User> Login(@RequestBody User user) {
//			String inputEmail = user.getUser_email();
//			String inputPw =user.getUser_pw();
//			System.out.println("로그인이메일 : "+inputEmail);
//			System.out.println("로그인비밀번호 : "+inputPw);
//
//			User loginUser = mapper.Login(user);
//	        if(loginUser!=null) {
//	        
//	        	System.out.println("로그인성공");
//	        	System.out.println("가입일 : "+loginUser.getUser_joindate());
//	        	System.out.println("닉네임 : "+loginUser.getUser_nick());
//	        	System.out.println("회원구분 : "+loginUser.getUser_role());
//
//	        	return ResponseEntity.ok(loginUser);
//	        	
//	        }else {
//	        	System.out.println("로그인실패");
//			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
//	        }
//	        }
		
		
		// 내가 작성한 댓글 불러오기
		@PostMapping("/mycomment")
		public ResponseEntity<List<MyComment>> myCommentList(@RequestBody User user) {
		    List<MyComment> myCommentList = new ArrayList<>();
		   
		    String inputEmail = user.getUser_email();
		    myCommentList = service.myCommentList(inputEmail);
		    
		    if (myCommentList != null) {
//		    	System.out.println(myCommentList.get(0).getStory_title());
		    	System.out.println("내가 댄글 단 글 갯수 : "+myCommentList.size());
		        return ResponseEntity.ok(myCommentList); // 나중에 return 값 수정
		    } else {
		        System.out.println("리스트 출력 실패");
		        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
		        		
		    }
		}
		
		
		
	
}