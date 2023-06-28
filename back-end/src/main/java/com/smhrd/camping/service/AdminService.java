package com.smhrd.camping.service;

import java.util.List;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;
import com.smhrd.camping.mapper.AdminMapper;
import com.smhrd.camping.mapper.UserMapper;

@Service
public class AdminService {

	@Autowired
	private AdminMapper mapper;

	// 모든 유저 정보 리스트

	public List<User> allUser() {
		return mapper.allUser();
	}

	// 선택한 회원 정보를 삭제하는 메소드
	public boolean deleteUser(User user) {
		int result = mapper.deleteUser(user);
		return (result > 0);
	}

	// 모든 게시글 정보를 가져오는 메소드
	public List<Comunity> allStory() {
		return mapper.allStory();
	}

	// 선택한 게시글 정보를 삭제하는 메소드
	public boolean deleteStory(Comunity story) {
		int result = mapper.deleteStory(story);
		return result > 0;
	}

}