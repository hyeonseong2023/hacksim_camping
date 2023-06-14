package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class User {
	private String user_email;  	//회원 이메일
	private String user_pw; 	//회원 비밀번호
	private String user_nick;	//회원 닉네임
	private String user_role;		//회원 역할 구분
	private String user_joindate;		//회원 가입일자
	private String user_type;		//회원 가입 구분
	
	public User(String user_email, String pw) {
		this.user_email = user_email;
		this.user_pw = pw;
	}
	
}


