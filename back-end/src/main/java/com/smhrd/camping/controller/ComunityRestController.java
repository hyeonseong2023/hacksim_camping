package com.smhrd.camping.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.support.MissingServletRequestPartException;

import com.smhrd.camping.domain.Comunity;
import com.smhrd.camping.service.ComunityService;

@RestController
@CrossOrigin("http://localhost:3000")
public class ComunityRestController {

	@Autowired
	private ComunityService service;
	
	@GetMapping("/comunity")
	public JSONArray ComunityList() {
		JSONArray array = service.ComunityList();
		
		return array;
	}
	
	@GetMapping("/{idx}")
	public JSONObject ComunityOne(@PathVariable("idx") int idx) {
		return service.ComunityOne(idx);
	}
	
	
	@PostMapping("/comunity/write")
	public String write(Comunity c, @RequestPart(value = "file",required = false) MultipartFile file) {
			
		
//		if(!file.isEmpty()) { 
		if(file == null) { // 파일이 업로드 되지 않음 -> 파일X
			System.out.println("파일이 없어요");
//			return ResponseEntity.badRequest().body("No file found in the request.");
//			c.setStory_img("no.jpg");
			
//			return ResponseEntity.ok("No file fount in requestadsfasdfasd");
			return "글쓰기 업로드 실패";
			
		} else { // 파일이 비어있지 않다면 -> 파일 있음	
			String uploadPath = "/uploaded"; // 파일 저장 경로
			
			System.out.println("요청 받음");
			System.out.println(c.getStory_title()+","+c.getStory_writer()+", "+c.getStory_content());
			
			String newFileName = UUID.randomUUID().toString() + file.getOriginalFilename();		
			// 이미지 file -> 저장(지정된 경로에)
			File destinationFile = new File(uploadPath+"/"+newFileName);	
			
			System.out.printf("%d번째, 파일이 들어와 있음\n",new Throwable().getStackTrace()[0].getLineNumber());
			System.out.printf("file org name = {}, %s", file.getOriginalFilename());
			System.out.printf("file content type = {}, %s", file.getContentType());
			
			try {
				file.transferTo(destinationFile);				
				
				} catch(IllegalStateException e) {
					e.printStackTrace();
				}catch(HttpMessageNotReadableException e) {
					System.out.println("http메세지를 읽을 수 없음");
				}catch(NoSuchFileException e) {
					System.out.println("경로가 이상함");
				}catch(IOException e) {
					e.printStackTrace();
					System.out.println("입출력 이상함");
				}
				
				c.setStory_img(newFileName);
				//c(Comunity) -> title, ~~~~ photo(filename)
				//comunity table(DB) -> 랜덤숫자+파일 이름만 저장
				
				
				
//				return ResponseEntity.ok("File uploaded successfully");
			
		}// else문임
		
		
					
		int cnt = service.write(c);
		
		System.out.println("return문");
		System.out.println("cnt : " + cnt);
		if(cnt>0) {
			System.out.println("글쓰기 완료");
//			return "redirect:/comunity";
		}
		else {
			System.out.println("글쓰기 실패");
//			return "redirect:/write";
		}
//		return ResponseEntity.ok("파일 업로드 완료");
		return "파일 업로드 성공";
	}
		
	
	@PostMapping("/comunity/write2")	
	public void write2(Comunity c, @RequestPart("story_img") MultipartFile file) {
		System.out.println("요청 받음 테스트");		
		System.out.printf("제목: %s, 작성자:%s, 내용: %s\n", c.getStory_title(), c.getStory_writer(), c.getStory_content());
		if(c.getStory_img()==null)
			System.out.printf("이미지: %s\n", c.getStory_img());
	}
	
	
	@GetMapping("/comunity/a")
	public String category() { //carray : 카테고리 스텝 array
		String carray = service.CategoryStep();
		return carray;
		
	}

	
	
}
