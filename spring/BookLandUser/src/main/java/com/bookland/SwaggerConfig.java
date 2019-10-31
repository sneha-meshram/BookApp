package com.bookland;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

	@Bean
	public Docket swaggerConfiguration() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()								//Builder
//				.paths(PathSelectors.ant("/api/v1/**")) 	//Can also use regex for pathSelectors
				.paths(PathSelectors.any())
//				.paths(PathSelectors.ant("/register"))
				.apis(RequestHandlerSelectors.basePackage("com.example"))
				.build()								//Docket
				.apiInfo(getApiInfo());					//Configuring api information
	}
	
	private ApiInfo getApiInfo() {
		return new ApiInfoBuilder()
		.title("Book Catalog API")
		.build();
	}
}

