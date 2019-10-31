package com.bookland.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bookland.model.Favourite;

@Repository
public interface FavouriteRepository extends MongoRepository<Favourite, Integer>{

	  
	 public Favourite[] findAllFavouritesByUserId(String userId);

	public int deleteByIsbn(String isbn);

	public Optional<Favourite> findOneByIsbnAndUserId(String isbn, String userId);

	public Object findOneByIsbnAndUserId(String anyString);

	
}

		
	

	


