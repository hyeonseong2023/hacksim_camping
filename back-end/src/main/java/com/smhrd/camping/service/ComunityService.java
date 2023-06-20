package com.smhrd.camping.service;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;
import com.smhrd.camping.converter.ImageConverter;
import com.smhrd.camping.converter.ImageToBase64;
import com.smhrd.camping.domain.Category;
import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.mapper.CampingMapper;


@Service
public class ComunityService {
	
	@Autowired
	private CampingMapper mapper;
	
	@Autowired
	private ResourceLoader resourceLoader;
	
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
	
	public JSONArray ComunityList() {
		List<Comunity> list = mapper.ComunityList();
		
		//list(Product-> img (파일이름만 가지고 있음, 실제 파일x)
		//Product -> img(파일이름-dress1.jpeg) -> 실제 파일 가지고 오기(static/img/...)
		//파일을 응답해줄 떄 (파일의 형태가 중요 : byte형태로 변환 해야함!)
		//Product 의 img 필드 값을 이미지를 바이트 문자열 형태로 바꾼걸로 수정!
				
		//JsonArray 에 JsonObject가 들어있는 형식으로 응답
		//List -> JsonArray
		
		JSONArray jsonArray = new JSONArray();
		ImageConverter<File, String> converter = new ImageToBase64();
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
//			}catch(IOException e) {
//				e.printStackTrace();
//			}
			
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
		String filepath = "classpath:/static/img"+comunity.getStory_img();
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
	
	public int write(Comunity c) {
		return mapper.write(c);
	}
	
	
	
	

}
