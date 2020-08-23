package com.spa.all.user.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.WebSession;

import com.spa.all.config.dbc.MysqlConfig;
import com.spa.all.user.params.User;
import com.spa.all.user.repo.UserRepository;
import com.spa.all.user.sql.UserQueryContainer;

import reactor.core.publisher.Mono;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    /**
     * user 추가 [단일]
     * 
     * @param request
     * @return
     */
    @PostMapping(value = "/register", consumes = "application/json", produces = "application/json")
    public Mono<Map<String, Object>> register(@RequestBody User user) {
	Map<String, Object> result = new HashMap<>();
	result.put("result", "200 Success Create User");
	// 유저가 존재하면 fail 처리
	Mono<Map<String, Object>> resutMono = userRepository.findByUsername(user.getUsername()).flatMap(u -> {
	    result.put("result", "fail");
	    return Mono.just(result);
	}).switchIfEmpty(
		//  Cannot send messages because the connection is closed 이슈가 있어, r2dbc pool로 관리해야함
		userRepository.save(user).thenReturn(result));

	return resutMono;

    }

    /**
     * 로그인하기
     * 
     * @param request
     * @return
     */
    @PostMapping(value = "/login", consumes = "application/json", produces = "application/json")
    public Mono<Map<String, Object>> login(@RequestBody User user, WebSession session) {
	Map<String, Object> result = new HashMap<>();
	result.put("result", "400 Fail Login");
	// 유저가 존재하면 fail 처리
	Mono<Map<String, Object>> resutMono = userRepository
		.findByUsernameAndPassword(user.getUsername(), user.getPassword()).flatMap(u -> {
		    result.put("result", "200 Success Login");
		    session.getAttributes().putIfAbsent("user_1", u.getUsername());
		    return Mono.just(result);
		}).defaultIfEmpty(result);

	return resutMono;

    }

}