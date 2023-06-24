package com.smhrd.camping.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.Gson;
import com.smhrd.camping.converter.ImageConverter;
import com.smhrd.camping.converter.ImageToBase64;
import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comment;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.mapper.CampingMapper;


@Service
public class ComunityService {
	
	@Autowired
	private CampingMapper mapper;
	
	@Autowired
	private ResourceLoader resourceLoader;
	
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
	
	public String CommentList() {
		List<Comment> comment_list = mapper.CommentList();
		
		Gson gson = new Gson();
		
		String comment_json = gson.toJson(comment_list);
		
		return comment_json;
	}
	
	public JSONArray ComunityList() {
		List<Comunity> list = mapper.ComunityList();
		
		//list(Product-> img (파일이름만 가지고 있음, 실제 파일x)
		//Product -> img(파일이름-dress1.jpeg) -> 실제 파일 가지고 오기(static/img/...)
		//파일을 응답해줄 떄 (파일의 형태가 중요 : byte형태로 변환 해야함!)
		//Product 의 img 필드 값을 이미지를 바이트 문자열 형태로 바꾼걸로 수정!
				
		//JsonArray 에 JsonObject가 들어있는 형식으로 응답
		//List -> JsonArray
		
		JSONArray jsonArray = new JSONArray();
//		ImageConverter<File, String> converter = new ImageToBase64();
		//Comunity -> JsonObject
		for(Comunity c: list) {
			System.out.println(c.getStory_content()+ c.getStory_title());
			//1. img 필드값 수정( 파일이름 -> 이미지 바이트 문자열 형태)
			//-1. 변환할 파일 실제 경로 정의
			
			
			
			
			
			
			
//			String filepath = "classpath:/static/img"+c.getStory_img();
//			Resource resource = resourceLoader.getResource(filepath);
//			String fileStringValue = null;
//			try {
//			fileStringValue= converter.convert(resource.getFile());
//		}catch(IOException e) {
//				e.printStackTrace();
//			}
//			
//			c.setStory_img(fileStringValue);
			
			
			//2. Comunity -> JsonObject(key:value) 변환
			JSONObject obj = new JSONObject(); //비어있는 json object 생성
			obj.put("comunity", c); //비어있는 object에 값을 추가한 것 
			
			jsonArray.add(obj); 
		}
		return jsonArray;
	}
	
	public JSONObject ComunityOne(int idx) {
		Comunity comunity = mapper.ComunityOne(idx);
		JSONObject obj = new JSONObject();
		ImageConverter<File, String> converter = new ImageToBase64();
		String filepath = "src/main/resources/" + UPLOAD_DIRECTORY +comunity.getStory_img();
		Resource resource = resourceLoader.getResource(filepath);
		String fileStringValue = null;
		try {
		fileStringValue= converter.convert(resource.getFile());
		}catch(IOException e) {
			e.printStackTrace();
		}
		
		comunity.setStory_img(fileStringValue);
		//2. Comunity -> JsonObject(key:value)변환
		obj.put("comunity", comunity);
		
		return obj;
		
		
	}
	
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
	
	
	
	public String saveFile(MultipartFile file) {
		Random rd = new Random();
		String url = rd.toString();
		//파일 저장
		//예시: 원본 파일의 확장자를 유지하여 저장하는 방식
		String originalFileName = file.getOriginalFilename(); //원본파일 이름
		String fileName = url.toString() + (originalFileName); //임의의 파일 이름 + 확장자
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
	

	public int comment(Comment m) {
		// TODO Auto-generated method stub
		return mapper.comment(m);
	}
	
	public List<Comunity> searchComunity(String search){
		return mapper.searchComunity(search);
	}
	
	
	

}
