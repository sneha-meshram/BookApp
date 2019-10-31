package com.bookland.services;

import com.bookland.exception.RecommendAlreadyExistsException;
import com.bookland.exception.RecommendNotFoundException;
import com.bookland.model.Recommend;
import com.bookland.repository.RecommendRepository;
import com.bookland.service.RecommendServiceImpl;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class RecommendServiceImplTest {

    @Mock
    private RecommendRepository recommendRepository;

    @InjectMocks
    private RecommendServiceImpl recommendService;
    private Recommend[] allRecommends;

    private Recommend recommend;


    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        recommend = new Recommend();
        //recommend.setRecommendId(12354);
        recommend.setAuthor_name("john wick");
        recommend.setIsbn("45678967456136");
        recommend.setTitle("harry potter");
        recommend.setUserId("john123");
        allRecommends = new Recommend[6];
    }

        @After
    public void tearDown() throws Exception {
    }

    //    should delete recommend by Id.

    @Test(expected = RecommendNotFoundException.class)
    public void deleteRecommend() throws RecommendNotFoundException {
//        when(recommendRepository.deleteByIsbn( recommend.getIsbn())).thenReturn(12345);
        boolean flag = recommendService.deleteRecommend( "isbn");
        Assert.assertEquals(true, flag);
    }

//    should return all recommend by Id.
    @Test
    public void getAllRecommends() {
        when(recommendRepository.findAllRecommendsByUserId(recommend.getUserId())).thenReturn(allRecommends);
        Recommend[] recommendList = recommendService.getAllRecommends(recommend.getUserId());
        Assert.assertArrayEquals(allRecommends, recommendList);

    }

//  should check recommend By Id is failure

        @Test(expected = Exception.class)
    public void testGetRecByIdFailure() throws Exception {
        when(recommendService.getAllRecommends("sneha")).thenReturn(null);
        @SuppressWarnings("unused")
        List<Recommend> fetchedCategory = Arrays.asList(recommendService.getAllRecommends("sneha"));
    }



//    test case to check if delete favourite is failed

    @Test(expected = Exception.class)
    public void testDeleteRecommendFailure() throws Exception {
        when(recommendService.deleteRecommend("favId")).thenReturn(true);
        @SuppressWarnings("unused")
        boolean fetchedCategory = recommendService.deleteRecommend("favId");
    }
}
