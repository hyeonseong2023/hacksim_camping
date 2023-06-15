package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Category {

	private int category_idx;
	private String category_name;
	private int super_category;
	private int category_step;
	
	
}
