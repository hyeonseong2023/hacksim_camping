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
	
	// 회원가입
	public int Join(User user) {
		return mapper.Join(user);
	}

	// 로그인
	public User Login(User user) {
		return mapper.Login(user);
	}

	// SNS로그인
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

	// 내가 작성한 댓글 출력
	public List<MyComment> myCommentList(String user_email) {
		return mapper.myCommentList(user_email);
	}

	// 내가 작성한 댓글 삭제
	public int deleteComment(int getCmtIdx) {
		return mapper.deleteComment(getCmtIdx);
	}

	//내가 작성한 댓글 수정
		public int updateComment(MyComment comment) {
			return mapper.updateComment(comment);
		}

	// 회원탈퇴
	public boolean deleteUser(User user) {
		int result = mapper.deleteUser(user);
		return (result > 0);
	}

}