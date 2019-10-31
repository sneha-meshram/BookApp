package com.bookland.model;

import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;
@Entity
@Table(name = "USER_REGISTER")
public class User {
	

	private String fullname;
	@Id
	@Column(columnDefinition = "char(40)")
	private String email;
	private String password;
	@Lob
	//@Column(length=20000000)
	private String image;
	
	public User() {
		super();
	}
	
	public User(String fullname, String email, String password, String image) {
		super();
		//this.id = id;
		this.fullname = fullname;
		this.email = email;
		this.password = password;
		this.image = image;
	}


	public String getFullname() {
		return fullname;
	}
	public void setFullname(String fullname) {
		this.fullname = fullname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	
}
