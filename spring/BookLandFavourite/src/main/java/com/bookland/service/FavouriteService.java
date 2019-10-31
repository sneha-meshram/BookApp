package com.bookland.service;

import com.bookland.exception.FavouriteAlreadyExistsException;
import com.bookland.exception.FavouriteNotFoundException;
import com.bookland.model.Favourite;
public interface FavouriteService {

	public Favourite[] getAllFavourites(String userId);

	

public Favourite addFavourite(Favourite favourite) throws FavouriteAlreadyExistsException;
public boolean deleteFavourite(String isbn)throws FavouriteNotFoundException;
	
}
