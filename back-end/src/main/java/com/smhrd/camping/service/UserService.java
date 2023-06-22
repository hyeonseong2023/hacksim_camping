package com.smhrd.camping.service;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	


	public int Join(User user) {
		return mapper.Join(user);

	}
	
	

	public User Login(User user) {
		return mapper.Login(user);
}
	
	

	
	public User SnsLogin(User user) {
		return mapper.SnsLogin(user);
}

	// 이메일 중복 체크
	public int emailCheck(String user_email) {
		return mapper.emailCheck(user_email);
	}	
	
	
	// 회원정보수정
		public int update(User user) {
			return mapper.update(user);
		}

		// 회원탈퇴
		public int delete(User user) {
			return mapper.delete(user);
		}

		//내가 댓글 단 글 출력
		
		public List<MyComment> myCommentList(String user_email) {
			return mapper.myCommentList(user_email);
		}
	
}