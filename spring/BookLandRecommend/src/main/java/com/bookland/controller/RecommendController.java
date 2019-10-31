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

import com.bookland.exception.RecommendAlreadyExistsException;
import com.bookland.exception.RecommendNotFoundException;
import com.bookland.model.Recommend;
import com.bookland.service.RecommendService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class RecommendController {
	@Autowired
	private RecommendService recommendService;

	@GetMapping("/recommend/{userId}")
    public ResponseEntity<?> getAllRecommends(@PathVariable String userId){
		Recommend[] recommend=recommendService.getAllRecommends(userId);
        if(recommend!=null)
        {
        	return new ResponseEntity<Recommend[]>(recommend,HttpStatus.OK);
        }
        return new ResponseEntity<String>("no recommends available",HttpStatus.NOT_FOUND);
         }

	@PostMapping("/recommend/create")
	public ResponseEntity<String> addRecommend(@RequestBody Recommend recommend)  {
		//ResponseEntity<?> responseEntity = null;

		try {
			recommendService.addRecommend(recommend);
			//System.out.println("********Added Book :" + addedFavourite);
			System.out.println("recommend added");
			  return new ResponseEntity<String>("recommend added", HttpStatus.CREATED);
        } catch (RecommendAlreadyExistsException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
	}

	@DeleteMapping("/recommend/{isbn}")
    public ResponseEntity<String> deleteRecommend( @PathVariable String isbn){
    try {
        recommendService.deleteRecommend(isbn);
        return new ResponseEntity<String>("deleted successfuly", HttpStatus.OK);
    } catch (RecommendNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
        return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
    }

}
}
