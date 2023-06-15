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
	
}


