package com.smhrd.camping.service;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	
	// 이메일 중복 체크
	public int emailCheck(String user_email) {
		return mapper.emailCheck(user_email);
	}	
}