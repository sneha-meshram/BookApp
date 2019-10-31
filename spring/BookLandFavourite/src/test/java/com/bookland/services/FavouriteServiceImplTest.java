package com.bookland.services;

import com.bookland.exception.FavouriteAlreadyExistsException;
import com.bookland.exception.FavouriteNotFoundException;
import com.bookland.model.Favourite;
import com.bookland.repository.FavouriteRepository;
import com.bookland.service.FavouriteServiceImpl;

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
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class FavouriteServiceImplTest {

    private Favourite favourite;

    @Mock
    private FavouriteRepository favouriteRepository;

    @InjectMocks
    private FavouriteServiceImpl favouriteService;
    private Favourite[] allFavourites;


    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        favourite = new Favourite();
        //favourite.setFavouriteId(12354);
        favourite.setAuthor_name("john wick");
        favourite.setIsbn("45678967456136");
        favourite.setTitle("harry potter");
        favourite.setUserId("john123");
        allFavourites = new Favourite[6];
    }


    @After
    public void tearDown() throws Exception {
    }

//    should delete favourite

    @Test(expected = FavouriteNotFoundException.class)
    public void deleteFavourite() throws FavouriteNotFoundException {
//        when(favouriteRepository.deleteByIsbn(favourite.getIsbn())).thenReturn(12345);
        boolean flag = favouriteService.deleteFavourite("isbn");
        Assert.assertEquals(true, flag);
    }

        //should return All favourite

    @Test
    public void getAllFavourites() {
        when(favouriteRepository.findAllFavouritesByUserId(favourite.getUserId())).thenReturn(allFavourites);
        Favourite[] favouriteList = favouriteService.getAllFavourites(favourite.getUserId());
        Assert.assertArrayEquals(allFavourites,favouriteList);
    }


    //    test case to check if get favourite is failed

    @Test(expected = Exception.class)
    public void testGetFavouriteFailure() throws Exception {
        when(favouriteService.getAllFavourites("userId")).thenReturn(null);

        @SuppressWarnings("unused")
        List<Favourite> fetchedCategory = Arrays.asList(favouriteService.getAllFavourites("userId"));
    }

//    test case to check if delete favourite is failed

    @Test(expected = Exception.class)
    public void testDeleteFavouriteFailure() throws Exception {
        when(favouriteService.deleteFavourite("favId")).thenReturn(true);
        @SuppressWarnings("unused")
        boolean fetchedCategory = favouriteService.deleteFavourite("favId");
    }
}