package com.bookland.controller;


import com.bookland.controller.RecommendController;
import com.bookland.exception.RecommendAlreadyExistsException;
import com.bookland.model.Recommend;
import com.bookland.service.RecommendServiceImpl;
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
@WebMvcTest(controllers = RecommendController.class)
public class RecommendControllerTest {

    @Autowired
    private MockMvc mockMvc;

//    RecommendServiceImpl is a service created to add,get,delete the books favourite by user

    @MockBean
    private RecommendServiceImpl recommendService;

    private Recommend recommend;

    @Before
    public void setUp() throws Exception {
        recommend = new Recommend("the study in pink", "1234sneha", "sherlock", "sh123");
    }
    @After
    public void tearDown() throws Exception {
    }

    /* Should check recommend book is added successfully. */

    @Test
    public void shouldReturnDoRecommendSuccess() throws Exception{
        when(recommendService.addRecommend(Mockito.any(Recommend.class))).thenReturn(recommend);
        String favouriteJson=new ObjectMapper().writeValueAsString(recommend);

        mockMvc.perform(post("/api/recommend/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(favouriteJson))
                .andExpect(status().isCreated());

        verify(recommendService).addRecommend(Mockito.any(Recommend.class));
        verifyNoMoreInteractions(recommendService);

    }

//    Should return do recommend failure */

    @Test
    public void shouldReturnDoRecommendFailure() throws Exception{
        when(recommendService.addRecommend(Mockito.any(Recommend.class)))
                .thenThrow(RecommendAlreadyExistsException.class);
        String favouriteJson = new ObjectMapper().writeValueAsString(recommend);

        mockMvc.perform(post("/api/recommend/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(favouriteJson))
                .andExpect(status().isConflict());

        verify(recommendService).addRecommend(Mockito.any(Recommend.class));
        verifyNoMoreInteractions(recommendService);
    }

}