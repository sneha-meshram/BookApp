package com.bookland.service;


import com.bookland.exception.RecommendAlreadyExistsException;
import com.bookland.exception.RecommendNotFoundException;
import com.bookland.model.Recommend;


public interface RecommendService {

	
public Recommend[] getAllRecommends(String userId);

public Recommend addRecommend(Recommend recommend) throws RecommendAlreadyExistsException;
public boolean deleteRecommend(String isbn)throws RecommendNotFoundException;
}
