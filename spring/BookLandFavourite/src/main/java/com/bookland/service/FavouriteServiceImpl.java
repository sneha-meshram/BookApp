package com.bookland.service;
import org.springframework.stereotype.Service;

import com.bookland.exception.FavouriteAlreadyExistsException;
import com.bookland.exception.FavouriteNotFoundException;
import com.bookland.model.Favourite;
import com.bookland.repository.FavouriteRepository;


@Service
public class FavouriteServiceImpl implements FavouriteService{

	//@Autowired
	private FavouriteRepository favouriteRepository;

	public FavouriteServiceImpl(FavouriteRepository favouriteRepository) {
		super();
		this.favouriteRepository = favouriteRepository;
	}
	

	@Override
    public Favourite addFavourite (Favourite favourite) throws FavouriteAlreadyExistsException {
        // TODO Auto-generated method stub
        System.out.println(favourite);
        
        
        
        if (favouriteRepository.findOneByIsbnAndUserId(favourite.getIsbn(), favourite.getUserId()).isPresent()) {
            throw new FavouriteAlreadyExistsException("recommend already exists");
        }
        return favouriteRepository.insert(favourite);
    }

	public boolean deleteFavourite( String isbn) throws FavouriteNotFoundException {
        
        
//      System.out.println(userId+":"+name);    
  if(    favouriteRepository.deleteByIsbn(isbn)==0)
      {
      throw new FavouriteNotFoundException("favourite not found");
      
      };            
      
      return true;
  }



	@Override
	public Favourite[] getAllFavourites(String userId) {
		
		return favouriteRepository.findAllFavouritesByUserId(userId);
		// TODO Auto-generated method stub

	}
	

}
