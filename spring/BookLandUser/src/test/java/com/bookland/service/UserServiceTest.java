package com.bookland.service;

import com.bookland.exception.UserExistsException;
import com.bookland.model.User;
import com.bookland.repository.UserRepository;
import com.bookland.service.UserServiceImpl;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceTest {
    //Create a mock for UserRepository
    @Mock
    private UserRepository userRepository;

    //Inject the mocks as dependencies
    @InjectMocks
    private UserServiceImpl userService;
    User user;

    Optional<User> optUser;

    @Before
    public void setUp() throws Exception {
        user = new User("sneha", "sneha@gmail.com", "sneha123", "pic.jpg");
        optUser = Optional.of(user);
    }

    @After
    public void tearDown() throws Exception{
    }

    /* should check user register is success */

    @Test
    public void registerUserSuccess() throws UserExistsException {
        when(userRepository.save(any())).thenReturn(user);
        User registerUser=userService.registerUser(user);
        Assert.assertEquals(user, registerUser);
        verify(userRepository, times(1)).save(user);
    }

    /* should check user register is failure */

    @Test(expected = UserExistsException.class)
    public void testAddUserFailureAll() throws UserExistsException {
        when(userRepository.findById(Mockito.anyString())).
                thenReturn(optUser);
        userService.registerUser(user);
        verify(userRepository).findById(Mockito.anyString());
    }



}

