package com.smhrd.camping.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import java.util.UUID;


import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.mapper.CampingMapper;


@Service
public class ComunityService {
	//mapper 의존성 주입
	@Autowired
	private CampingMapper mapper;
	
	
	@Autowired
	private ResourceLoader resourceLoader;
	

//	private static final String UPLOAD_DIRECTORY ="static/img"; 리액트 웹에서 접근 가능한 경로
	
	//상품 카테고리 스텝

	private static final String UPLOAD_DIRECTORY ="static/img"; //리액트 웹에서 접근 가능한 경로
	

	public String CategoryStep() {
		List<Category> clist = mapper.CategoryStep();
		
		Gson gson = new Gson();
		
		String jsonArr = gson.toJson(clist);
		
//		System.out.println(jsonArr);
		
//		JSONArray jsonArray = new JSONArray();
//		JSONObject obj = new JSONObject();
//		System.out.println(clist.size());
//		for(int i =0; i<clist.size();i++) {
//			System.out.println(clist.get(i).getCategory_name());
//			obj.put("sdaf", clist.get(i).getCategory_name());
//			jsonArray.add(obj);
//			System.out.println(jsonArray);
//		}
			
		return jsonArr;
	}
	

	
	//게시판 게시물 목록 조회

	public JSONArray ComunityList() {
		List<Comunity> list = mapper.ComunityList();

		JSONArray jsonArray = new JSONArray();

		for(Comunity c: list) {
//			System.out.println(c.getStory_content()+ c.getStory_title());

			JSONObject obj = new JSONObject(); //비어있는 json object 생성
			obj.put("comunity", c); //비어있는 object에 값을 추가한 것 
			
			jsonArray.add(obj); 
		}
		return jsonArray;
	}
	

	//상세 게시물 조회
	public Comunity ComunityOne(int idx) {
		return mapper.ComunityOne(idx);	
	}
	
	//댓글 작성

	// 좋아요 높은 순으로 불러오기
	public JSONArray LoadCommunityLike() {
		List<Comunity> list = mapper.LoadCommunityLike();
		JSONArray jsonArray = new JSONArray();
		for (Comunity c : list) {
			JSONObject obj = new JSONObject();
			obj.put("comunity", c);
			jsonArray.add(obj);
		}
		return jsonArray;		
	}
	
	// 조회수 높은 순으로 불러오기
	public JSONArray LoadCommunityView() {
		List<Comunity> list = mapper.LoadCommunityView();
		JSONArray jsonArray = new JSONArray();
		for (Comunity c : list) {
			JSONObject obj = new JSONObject();
			obj.put("comunity", c);
			jsonArray.add(obj);
		}
		return jsonArray;		
	}
	
	
	
	// 글쓰기 

	public Comunity write(String story_title, String story_content, List<MultipartFile> file, String user_email , String story_category) {
		Comunity comunity = new Comunity();
		comunity.setStory_title(story_title);
		comunity.setStory_content(story_content);
		comunity.setUser_email(user_email);
		comunity.setStory_category(story_category);
		System.out.println(story_category);
		//파일 처리 및 파일 경로 설정
		List<String> fileUrls = new ArrayList<>();
		for(MultipartFile f : file) {
			String fileUrl = saveFile(f); //파일 저장 및 파일 경로 반환하는 메서드 호출
			if(fileUrl != null) {
				fileUrls.add(fileUrl);
			}
		}
		//파일 경로를 문자열로 변환하여 Comunity 객체에 저장
		comunity.setStory_img(String.join(",", fileUrls)); 
		
		//생성된 Comunity 객체를 DB에 삽입 (mapper를 활용하여 DB작업)
		mapper.write(comunity);
		
		return comunity;
	}
	
	//이미지 파일 저장하기
//	public String saveFile(MultipartFile file) {
//		//파일 저장
//		//예시: 원본 파일의 확장자를 유지하여 저장하는 방식
//		String originalFileName = file.getOriginalFilename(); //원본파일 이름
//		String fileName = UUID.randomUUID().toString() + getExtension(originalFileName); //임의의 파일 이름 + 확장자
//		String directoryPath = "src/main/resources/" + UPLOAD_DIRECTORY; //파일이 저장될 디렉토리 경로
////		private static final String UPLOAD_DIRECTORY ="static/img";
//		try {
//			//파일 저장 로직 구현
//			byte[] bytes = file.getBytes();
//			Path path = Paths.get(directoryPath,fileName);
//			Files.write(path, bytes);
//			
//			System.out.println("파일 저장 성공");
//			String filePath = UPLOAD_DIRECTORY + "/" + fileName;//리액트 웹에서 접근 가능한 파일 경로
//			
//			System.out.println(filePath);
//			return filePath; // 저장된 파일의 경로 반환
//			
//		}catch(IOException e) {
//			//파일 저장 실패시 예외 처리
//			e.printStackTrace();
//			System.out.println("파일 저장 실패");
//			return null;
//		}
//	}
	
	

	//파일 저장

	// 불러온 파일을 변환

	public String saveFile(MultipartFile file) {
		Random rd = new Random();
		String url = rd.toString();
		//파일 저장
		//예시: 원본 파일의 확장자를 유지하여 저장하는 방식
		String originalFileName = file.getOriginalFilename(); //원본파일 이름

		String fileName = UUID.randomUUID().toString() + getExtension(originalFileName); //임의의 파일 이름 + 확장자

		String directoryPath = "src/main/resources/static/img"; //파일이 저장될 디렉토리 경로
//		private static final String UPLOAD_DIRECTORY ="static/img";
		try {
			//파일 저장 로직 구현
			byte[] bytes = file.getBytes();
			Path path = Paths.get(directoryPath,fileName);
			Files.write(path, bytes);
			
			System.out.println("파일 저장 성공");
			String filePath = "static/img/" + fileName;//리액트 웹에서 접근 가능한 파일 경로
			
			System.out.println(filePath);
			return filePath; // 저장된 파일의 경로 반환
			
		}catch(IOException e) {
			//파일 저장 실패시 예외 처리
			e.printStackTrace();
			System.out.println("파일 저장 실패");
			return null;
		}
	}
	
	//확장자까지 저장하기
	private String getExtension(String filename) {
		int lastIndex = filename.lastIndexOf(".");
		if(lastIndex == -1) {
			return ""; // 확장자가 없는 경우
			
		}
		return filename.substring(lastIndex); //확장자를 포함한 경우
	}
	

	//댓글 작성
	public int comment(int idx, String cmt_content, String user_email) {
		Comment cmt = new Comment();
		cmt.setStory_idx(idx);
		cmt.setCmt_content(cmt_content);
		cmt.setUser_email(user_email);
		int result = mapper.comment(cmt);
		return result;
	}
	

	
	//댓글 목록 조회
	public List<Comment> CommentList(int idx) {
		System.out.println("service" +idx);
		List<Comment> comment_list = mapper.CommentList(idx);
		System.out.println("service" +comment_list);
//		Gson gson = new Gson();
//		
//		String comment_json = gson.toJson(comment_list);
		
		
		return comment_list;
	}
	
	// 게시물 검색
	// public List<Comunity> searchComunity(String search){
	// 	return mapper.searchComunity(search);
	// }


	//댓글 삭제
	public int CommentDelete(int cmt_idx, String user_email) {
		System.out.println("serivce"+ user_email);
		
		return mapper.CommentDelete(cmt_idx, user_email);
	}

    public List<Comunity> searchComunity(String query) {
        return mapper.searchComunity(query);
    }

	
 // ComunityService.java에 코드 추가
    public List<Comunity> sortedComunity(String mode) {
      return mapper.sortedComunity(mode);
    }

	

}
