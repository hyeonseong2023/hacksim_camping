package com.smhrd.camping.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Tags {
	private int story_idx;
	private int poi_x;
	private int poi_y;
	private int category_idx;
	private String product_name;
	private String product_link;
	
}
