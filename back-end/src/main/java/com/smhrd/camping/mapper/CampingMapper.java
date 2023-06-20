package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;

@Mapper
public interface CampingMapper {

	//comunity 전체 정보 불러오기
	public List<Comunity> ComunityList();
	
	public Comunity ComunityOne(int idx); //Comunity.java에 있는 글순번 idx
	
	public int write(Comunity comunity);
	
	public List<Category> CategoryStep();
	
	public int comment(Comment m);
	
	public  List<Comment> CommentList();
	
	public List<Comunity> searchComunity(String search);
	
}
