package com.smhrd.camping.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.camping.domain.User;

@Mapper
public interface UserMapper {

	// 회원가입
	public int join(User u);
	
	// 로그인
	public User login(User u);
}	
