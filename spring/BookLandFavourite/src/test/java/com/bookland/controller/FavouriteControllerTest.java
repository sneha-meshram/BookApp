package com.bookland.controller;


import com.bookland.controller.FavouriteController;
import com.bookland.exception.FavouriteAlreadyExistsException;
import com.bookland.model.Favourite;
import com.bookland.service.FavouriteServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = FavouriteController.class)
public class FavouriteControllerTest {

    @Autowired
    private MockMvc mockmvc;

    // FavouriteServiceImpl is a service created to add,get,delete the books favourite by user

    @MockBean
    private FavouriteServiceImpl favouriteService;

    private Favourite favourite;

    @Before
    public void setup() throws Exception {
        favourite = new Favourite("the study in pink", "1234sneha", "sherlock", "sh123");
    }
    @After
    public void tearDown() throws Exception{
    }

     /* Should check favourite book is added successfully. */

    @Test
    public void shouldReturnAddFavouriteSuccess() throws Exception{
        when(favouriteService.addFavourite(Mockito.any(Favourite.class))).thenReturn(favourite);
        String favouriteJson=new ObjectMapper().writeValueAsString(favourite);

        mockmvc.perform(post("/api/favourite/create")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(favouriteJson))
                .andExpect(status().isCreated());

        verify(favouriteService).addFavourite(Mockito.any(Favourite.class));
        verifyNoMoreInteractions(favouriteService);

    }

/*    Should return Add favourite failure */

    @Test
    public void shouldReturnAddFavouriteFailure() throws Exception{
        when(favouriteService.addFavourite(Mockito.any(Favourite.class)))
                .thenThrow(FavouriteAlreadyExistsException.class);
        String favouriteJson = new ObjectMapper().writeValueAsString(favourite);

        mockmvc.perform(post("/api/favourite/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(favouriteJson))
                .andExpect(status().isConflict());

        verify(favouriteService).addFavourite(Mockito.any(Favourite.class));
        verifyNoMoreInteractions(favouriteService);
    }



}

