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
	private String story_title;  	//게시판 제목
	private String story_writer; 	//게시판 작성자
	private String sroty_content;	//게시판 내용
	private String story_photo;		//게시판 이미지
	
}
