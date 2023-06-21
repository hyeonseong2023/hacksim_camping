package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class Comunity {
	private String story_idx;		//게시판 고유번호,글순번
	private String story_title;  	//게시판 제목
	private String story_content;	//게시판 내용
	private String story_img;		//게시판 이미지
	private String story_category;  //게시판 카테고리
	private String user_email; 		//회원 이메일
	
}

