package com.bookland.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bookland.exception.UserExistsException;
import com.bookland.exception.UserNotFoundException;
import com.bookland.model.User;
import com.bookland.service.UserServiceImpl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
@Controller
@CrossOrigin("*")
public class UserController {
	private UserServiceImpl userService;
	@Autowired
    private JavaMailSender sender;
	@Autowired
	public UserController(UserServiceImpl userService) {
		super();
		this.userService = userService;
	}
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody User user) {
		ResponseEntity<?> response = null;

		try {
			userService.registerUser(user);
			MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message);
             
            helper.setTo(user.getEmail());
            helper.setText("Greetings from BookLand !."
            		+ "Thanks for Registering."
            		+ "");
            helper.setSubject("User Successfully Registered");
             
            sender.send(message);
			response = new ResponseEntity<String>(HttpStatus.OK);
		} catch (UserExistsException e) {
			response = new ResponseEntity<String>(HttpStatus.CONFLICT);
			e.printStackTrace();
		} catch (Exception e) {
			response = new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
			e.printStackTrace();
		}
		return response;
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user) throws UserNotFoundException {

		User validUser = userService.login(user.getEmail(), user.getPassword());

		if (validUser == null) {
			throw new UserNotFoundException();
		}

		// Build the Json Web Token
		String token = Jwts.builder().setId(validUser.getEmail()).setSubject(validUser.getFullname())
				.setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "usersecretkey").compact();

		// Add it to a Map and send the map in response body
		Map<String, String> map1 = new HashMap<String, String>();
		map1.put("token", token);
		//map1.put("message", "User Successfully logged in");

		ResponseEntity<Map<String, String>> response = new ResponseEntity<Map<String, String>>(map1, HttpStatus.OK);
		return response;
	}
	

	@GetMapping("/get/{email}")
	   public ResponseEntity<?> getuser(@PathVariable String email ) throws UserNotFoundException {
	       ResponseEntity<?> responseEntity = null;
	       User register_Res = userService.getuser(email);
	       responseEntity = ResponseEntity.status(HttpStatus.OK).body(register_Res);
	        return responseEntity;
	   }

	@PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody User user,HttpSession httpSession) {
		  ResponseEntity<?> responseEntity;
		try {
            User ans = userService.userUpdate(user.getEmail(),user);
            responseEntity = new ResponseEntity<>(ans, HttpStatus.OK);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<>("some internal error" + e, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

}
