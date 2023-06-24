package com.smhrd.camping.domain;

import lombok.Data;

@Data
public class Comment{
	
	private int cmt_idx; //댓글 순번
	private int story_idx; //게시글 순번
	private String cmt_content; //댓글 내용
	private String cmt_dt; //댓글 작성일자
	private String user_email; //댓글 작성자(회원이메일)
	
}
