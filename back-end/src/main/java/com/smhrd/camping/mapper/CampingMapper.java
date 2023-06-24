package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.PathVariable;

import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;

@Mapper
public interface CampingMapper {

	//comunity 전체 정보 불러오기
	public List<Comunity> ComunityList(); //게시판 게시물 조회
	

	public Comunity ComunityOne(int idx); //Comunity.java에 있는 글순번 idx, 상세 게시물 조회
	
	public int write(Comunity comunity); //댓글 작성
	
	public List<Category> CategoryStep(); //상품 카테고리 스텝
	
	public int comment(Comment cmt); //댓글 작성
	
	public  List<Comment> CommentList(int idx); //댓글 리스트 
	
	public List<Comunity> searchComunity(String search); //게시물 검색

	public int CommentDelete(int cmt_idx, String user_email); //댓글 삭제





	// 수연

	// 게시물 -> 좋아요순으로 
	public List<Comunity> LoadCommunityLike();
	
	// 게시물 -> 조회수 순으로 
	public List<Comunity> LoadCommunityView();

	
	
	
	
}
