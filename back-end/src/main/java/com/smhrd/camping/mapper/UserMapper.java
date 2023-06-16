package com.smhrd.camping.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.camping.domain.User;

@Mapper
public interface UserMapper {

	// 회원가입
	@Insert("insert into tb_user(user_email, user_pw, user_nick) values(#{inputEmail},#{inputPw},#{inputNick})")
	public User Join(User user);
	
	// 로그인
	@Select("select * from tb_user where user_email=#{inputEmail} and user_pw=#{inputPw}")
	public User Login(User u);
	
	
}	
