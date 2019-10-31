package com.bookland;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.bookland.jwtfilter.AuthFilter;

@SpringBootApplication
public class BookLandUserApplication {
	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<Filter>();
		
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/api/v1/*");
		
		return bean;
		
	}
	
	public static void main(String[] args) {
		SpringApplication.run(BookLandUserApplication.class, args);
	}

}
