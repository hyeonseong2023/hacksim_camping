package com.smhrd.camping.mapper;

import com.smhrd.camping.domain.User;

public interface UserMapper {

	public User userData(String email);
	
	public User login(String email, String pw);
}
