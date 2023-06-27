package com.smhrd.camping.service;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.domain.MyComment;
import com.smhrd.camping.mapper.SearchMapper;

@Service
public class SearchService {
	@Autowired
	private SearchMapper mapper;

	
	// 링크 가져오기
	   public String getLink(int getlink) {
	      return mapper.getLink(getlink);
	   }
	   
	   
	// 파일 받아오기
	@Autowired
	private ResourceLoader resourceLoader;

	private static final String UPLOAD_DIRECTORY = "static/img"; // 리액트 웹에서 접근 가능한 경로

	// 검색기능
	public List<Comunity> Search(String getWorld) {
		return mapper.Search(getWorld);
	}

	// 내 데이터 출력 기능
	public List<Comunity> myStory(String user_email1) {
		return mapper.myStory(user_email1);
	}

}