package com.smhrd.camping.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.domain.User;

@Mapper
public interface UserMapper {

	// 회원가입

	//자체 회원가입
	@Insert("insert into tb_user(user_email, user_pw, user_nick, user_type) values(#{user_email},#{user_pw},#{user_nick},#{user_type})")
	public int Join(User user);

	
	// 로그인
	@Select("select * from tb_user where user_email=#{user_email} and user_pw=#{user_pw}")
	public User Login(User user);
	

	// SNS 로그인
	@Select("select * from tb_user where user_email=#{user_email}")
	public User SnsLogin(User user);

	// 이메일 중복체크
		@Select("select count(*) from tb_user where user_email=#{user_email}")
		public int emailCheck(@Param("user_email")String user_email);
		
		// 회원정보수정
		@Update("update tb_user set user_pw=#{user_pw}, user_nick=#{user_nick} where user_email=#{user_email}")
		public int update(User user);

		// 회원탈퇴
		@Delete("delete from tb_user where user_email=#{user_email}")
		public int delete(User user);
		
		
		//내가 작성한 댓글의 게시물 리스트, 그 게시물 속 내가 단 댓글 모두 가져오기 (MyCommnet)
		@Select("SELECT a.story_idx, a.cmt_content, b.story_title FROM tb_comment a JOIN tb_story b ON a.story_idx = b.story_idx WHERE a.user_email=#{user_email}")
		public List<MyComment> myCommentList(String user_email);


}	
