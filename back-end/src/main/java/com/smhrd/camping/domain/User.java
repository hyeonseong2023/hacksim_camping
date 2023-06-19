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
	private String inputEmail;  	//회원 이메일
	private String inputPw; 
	private String inputNick; //회원 닉네임 
	
	public User(String inputEmail, String inputPw) {
		this.inputEmail=inputEmail;
		this.inputPw=inputPw;
	}
	
	
}


