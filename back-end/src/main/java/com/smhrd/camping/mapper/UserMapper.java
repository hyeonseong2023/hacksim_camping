package com.smhrd.camping.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.camping.domain.User;

@Mapper
public interface UserMapper {

	// 회원가입
	@Insert("INSERT INTO TB_USER (USER_EMAIL, USER_PW, USER_NICK) VALUES(#{inputEmail},#{inputPw},#{inputNick})")
	public User Join(User user);
	
//	// 로그인
//	@Select("SELECT * FROM TB_USER WHERE USER_EMAIL=#{inputEmail} AND USER_PW = ${inputPw}")
//	public User Login(User user);
	
	
}	
