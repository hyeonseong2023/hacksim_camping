package com.smhrd.camping.controller;

import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.camping.domain.User;
import com.smhrd.camping.service.UserService;

import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {
	
	@Autowired
	private UserService service;
	
	@RequestMapping(value="/user/login", method=RequestMethod.POST)
	public String login(@RequestParam("email") String email, @RequestParam("pw") String pw, HttpSession session) {
		User us = new User(email,pw);
		User loginUser = Mapper.login(us);
		service.login(email, pw);
		
		return "";
		
	}
	
	
	
}
