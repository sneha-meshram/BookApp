package com.bookland.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookland.exception.FavouriteAlreadyExistsException;
import com.bookland.exception.FavouriteNotFoundException;
import com.bookland.model.Favourite;
import com.bookland.service.FavouriteService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class FavouriteController {

	
	@Autowired
	private FavouriteService favouriteService;

	public FavouriteController(FavouriteService favouriteService) {
		super();
		this.favouriteService = favouriteService;
	}

	@GetMapping("/favourites/{userId}")
    public ResponseEntity<?> getAllFavourites(@PathVariable String userId){
        Favourite[] favourite=favouriteService.getAllFavourites(userId);
        if(favourite!=null)
        {
            return new ResponseEntity<Favourite[]>(favourite,HttpStatus.OK);
        }
        return new ResponseEntity<String>("no favourites available",HttpStatus.NOT_FOUND);
        }
	@PostMapping("/favourite/create")
	public ResponseEntity<String> addFavourite(@RequestBody Favourite favourite)  {
		//ResponseEntity<?> responseEntity = null;

		try {
			favouriteService.addFavourite(favourite);
			//System.out.println("********Added Book :" + addedFavourite);
			System.out.println("favourite added");
			  return new ResponseEntity<String>("favourite added", HttpStatus.CREATED);
        } catch (FavouriteAlreadyExistsException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
	}

	@DeleteMapping("/favourites/{isbn}")
    public ResponseEntity<String> deleteFavourite( @PathVariable String isbn){
    try {
        favouriteService.deleteFavourite(isbn);
        return new ResponseEntity<String>("deleted successfuly", HttpStatus.OK);
    } catch (FavouriteNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
        return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
    }


}
}
