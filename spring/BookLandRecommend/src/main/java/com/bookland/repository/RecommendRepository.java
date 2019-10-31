package com.bookland.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.bookland.model.Recommend;


@Repository
public interface RecommendRepository extends MongoRepository<Recommend, Integer> {
	public Recommend[] findAllRecommendsByUserId(String userId);

	public int deleteByIsbn(String isbn);

	public Optional<Recommend> findOneByIsbnAndUserId(String isbn, String userId);

}
