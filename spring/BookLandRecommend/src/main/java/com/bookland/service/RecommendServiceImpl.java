package com.bookland.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookland.exception.RecommendAlreadyExistsException;
import com.bookland.exception.RecommendNotFoundException;
import com.bookland.model.Recommend;
import com.bookland.repository.RecommendRepository;

@Service
public class RecommendServiceImpl implements RecommendService{
	@Autowired
	
	private RecommendRepository recommendRepository;

	public RecommendServiceImpl(RecommendRepository recommendRepository) {
		super();
		this.recommendRepository = recommendRepository;
	}
	@Override
    public Recommend addRecommend (Recommend recommend) throws RecommendAlreadyExistsException {
        // TODO Auto-generated method stub
        System.out.println(recommend);
        
        
        
        if (recommendRepository.findOneByIsbnAndUserId(recommend.getIsbn(), recommend.getUserId()).isPresent()) {
            throw new RecommendAlreadyExistsException("recommend already exists");
        }
        return recommendRepository.insert(recommend);
    }


public boolean deleteRecommend( String isbn) throws RecommendNotFoundException {
        
        
//      System.out.println(userId+":"+name);    
  if(    recommendRepository.deleteByIsbn(isbn)==0)
      {
      throw new RecommendNotFoundException("recommend not found");
      
      };            
      
      return true;
  }

@Override
public Recommend[] getAllRecommends(String userId) {
	
	return recommendRepository.findAllRecommendsByUserId(userId);
	// TODO Auto-generated method stub

}
}
