package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;

@Mapper
public interface AdminMapper {

	// 내가 작성한 댓글의 게시물 리스트, 그 게시물 속 내가 단 댓글 모두 가져오기 (MyCommnet)
	@Select("SELECT * FROM TB_USER")
	public List<User> allUser();

	// 리스트의 회원 정보 삭제
	@Delete("DELETE FROM TB_USER WHERE user_email = #{user_email}")
	public int deleteUser(User user);

	// 모든 게시글 정보를 가져오는 쿼리
	@Select("SELECT * FROM TB_STORY")
	public List<Comunity> allStory();

	// 게시글을 삭제하는 쿼리
	@Delete("DELETE FROM TB_STORY WHERE story_idx = #{story_idx}")
	public int deleteStory(Comunity story);

}
