package com.bookland.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recommend")
public class Recommend {
	private  String id;
	private  String userId;
	
	private String title;
	private String isbn;
	private String author_name;
	public Recommend() {
		super();
	}
	public Recommend(String title, String isbn, String author_name,String userId) {
		super();
		this.userId = userId;
		this.title = title;
		this.isbn = isbn;
		this.author_name = author_name;
	}
	public String getId() {
		return id;
	}

	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getIsbn() {
		return isbn;
	}
	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}
	public String getAuthor_name() {
		return author_name;
	}
	public void setAuthor_name(String author_name) {
		this.author_name = author_name;
	}
	@Override
	public String toString() {
		return "Recommend [id=" + id + ", userId=" + userId + ", title=" + title + ", isbn=" + isbn + ", author_name="
				+ author_name + "]";
	}
	
}
