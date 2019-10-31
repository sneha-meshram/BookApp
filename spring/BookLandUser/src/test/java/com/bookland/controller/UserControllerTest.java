package com.bookland.controller;


import com.bookland.controller.UserController;
import com.bookland.model.User;
import com.bookland.service.UserServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;
    private User user;

    Optional<User> optUser;

    @MockBean
    private UserServiceImpl userService;

    @MockBean
    private JavaMailSender sender;

//    @InjectMocks
    private UserController userController;

    @Before
    public void setup()throws Exception{
        user=new User("sneha","sneha@gmail.com","sneha123","1.jpg");
        optUser = Optional.of(user);
    }

    @After
    public void tearDown() throws Exception{
    }

    @Test
    public void testRegisterUserSuccess() throws Exception{
        //setup the service mock
        when(userService.registerUser(Mockito.any(User.class))).thenReturn(user);
        //send a post request using mockMVC
        String userJson=new ObjectMapper().writeValueAsString(user);

        mockMvc.perform(post("/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
                .andExpect(status().isInternalServerError());

        //verify mock has been called
        verify(userService).registerUser(Mockito.any(User.class));
        verifyNoMoreInteractions(userService);
    }
    @Test
    public void testRegisterUserFailure() throws Exception{
        //setup the service mock
        when(userService.registerUser(Mockito.any(User.class))).thenReturn(null);

        //send a post request using mockMVC
        String userJson=new ObjectMapper().writeValueAsString(user);

        mockMvc.perform(post("/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(userJson))
                .andExpect(status().isInternalServerError());

        //verify mock has been called
        verify(userService).registerUser(Mockito.any(User.class));
        verifyNoMoreInteractions(userService);
    }

}
