package com.bookland.service;

import com.bookland.exception.UserExistsException;
import com.bookland.exception.UserNotFoundException;
import com.bookland.model.User;

public interface UserService {
	public User registerUser(User user) throws UserExistsException;
	public User login(String email, String password);
	User getuser(String email) throws UserNotFoundException;
}
