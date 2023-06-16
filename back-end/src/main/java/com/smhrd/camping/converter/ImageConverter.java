package com.smhrd.camping.converter;
import java.io.IOException;

public abstract class ImageConverter<F,S> {

	//<> : Generic , 사용자가 필요할 때 형태를 지정할 수 있음
	
	//실제 변환할 때 오버라이딩 할 추상메서드 정의
	public abstract String convert(F f) throws IOException;
}
