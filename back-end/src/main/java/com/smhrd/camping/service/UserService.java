package com.smhrd.camping.service;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.camping.mapper.UserMapper;

@Service
public class UserService {
	
	@Autowired
	private UserMapper mapper;
	
	public JSONObject userData(String email) {
		
	}
	
}
