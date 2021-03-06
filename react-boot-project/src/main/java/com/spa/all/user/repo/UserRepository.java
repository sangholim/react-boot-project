package com.spa.all.user.repo;


import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import com.spa.all.user.params.User;
import com.spa.all.user.sql.UserQueryContainer;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface UserRepository extends ReactiveCrudRepository<User, Long>{

    /**
     * user 질의
     * 
     * @param request
     * @return
     */
    @Query(UserQueryContainer.getUser)
    public Flux<User> findByUsername(String username);

    /**
     * 유저 매칭
     * 
     * @param request
     * @return
     */
    @Query(UserQueryContainer.getMatchUser)
    public Mono<User> findByUsernameAndPassword(String username, String password);

    /**
     * 유저 추가
     * 
     * @param request
     * @return
     */
    /*
    @Query(UserQueryContainer.addUser)
    public Mono<User> save(User user);
	*/
}
