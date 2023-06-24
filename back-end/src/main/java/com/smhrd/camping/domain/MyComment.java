package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MyComment {
	private int cmt_idx; //댓글 순번
	private int story_idx; //게시글 순번
	private String cmt_content; //댓글 내용
	private String cmt_dt; //댓글 작성일자
	private String user_email; //댓글 작성자(회원이메일)
	private String story_title;  	//게시판 제목
	private String story_img;		//게시판 이미지
	
}
