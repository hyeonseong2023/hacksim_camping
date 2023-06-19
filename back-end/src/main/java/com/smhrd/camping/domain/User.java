package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

//public class User {
//	private String inputEmail;  	//회원 이메일
//	private String inputPw; 
//	private String inputNick; //회원 닉네임 
//	
//}

public class User {
	private String user_email;  	//회원 이메일
	private String user_pw; 
	private String user_nick; //회원 닉네임 
	private String user_role;
	private String user_joindate;
	private String user_type;
}
