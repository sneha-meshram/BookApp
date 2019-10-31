package com.bookland.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import com.bookland.exception.UserExistsException;
import com.bookland.exception.UserNotFoundException;
import com.bookland.model.User;
import com.bookland.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	private UserRepository userRepo;

	@Autowired
	public UserServiceImpl(UserRepository userRepo) {
		this.userRepo = userRepo;
	}
	public User registerUser(User user) throws UserExistsException {
		Optional<User> optUser = userRepo.findById(user.getEmail());
		if (optUser.isPresent()) {
			throw new UserExistsException();
		}
		String hashpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
		System.out.println(hashpw);
		user.setPassword(hashpw);
		return userRepo.save(user);
	}
	public User login(String email, String password) {
		Optional<User> userSearch = userRepo.findById(email);
		User user = null;
		if(userSearch.isPresent()) {
			user = userSearch.get();
			boolean matched = BCrypt.checkpw(password, user.getPassword());
			if(!matched) {
				user = null;
			}
		}
		return user;
		//
		//return userRepo.findByUsernameAndPassword(username, password);
	}
	

@Override
public User getuser(String email) throws UserNotFoundException {
    Optional<User> regSearch = userRepo.findUserByEmail(email);
     if(regSearch==null) {
            throw new UserNotFoundException ("does not exist");
        }
    return (regSearch.get());
    }

public User userUpdate(User user) throws UserNotFoundException{
    User createdUser=null;
                Optional<User> optional=userRepo.findById(user.getEmail());
            if(!optional.isPresent())
            {
                throw new UserNotFoundException();
            }
            else {
                String hashpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
                System.out.println(hashpw);
                user.setPassword(hashpw);
                createdUser=userRepo.save(user);
            }
            return createdUser;
        }


public User userUpdate(String email,User user) throws UserNotFoundException{
    User updUser;
    try {
        updUser = userRepo.findById(email).get();
        String hashpw = BCrypt.hashpw(user.getPassword(), BCrypt.gensalt());
        updUser.setPassword(hashpw);
        userRepo.save(updUser);
    } catch (Exception e) {
        // TODO Auto-generated catch block
        throw new UserNotFoundException("User not Found");
    }
    return updUser;
        }


}
