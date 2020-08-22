package com.spa.all.user.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.r2dbc.core.DatabaseClient;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.spa.all.config.dbc.MysqlConfig;
import com.spa.all.user.params.User;
import com.spa.all.user.sql.UserQueryContainer;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
public class UserHandler {

    @Autowired
    private MysqlConfig mysqlConfig;

    /**
     * user 추가 [단일]
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> insertUser(ServerRequest request) {
	// get User From mono
	Mono<User> createUser = request.bodyToMono(User.class);
	Mono<String> result = createUser.flatMap(user -> {
	    DatabaseClient client = mysqlConfig.createClient();
	    return client.execute(UserQueryContainer.getUser).bind("username", user.getUsername()).fetch().one()
		    .flatMap(m -> Mono.just("500. Already Registered Exist User")).switchIfEmpty(
			    client.insert().into(User.class).using(user).map(r -> "200 Success Create User").one());

	}).defaultIfEmpty("Empty User Info");

	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(result, Object.class);

    }

    /**
     * 로그인하기
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> login(ServerRequest request) {

	// get User From mono
	Mono<User> createUser = request.bodyToMono(User.class);
	Mono<String> result = createUser.flatMap(user -> {
	    if (user.getUsername() == null || user.getPassword() == null) {
		// user가 없을떄 수행하지 않음
		return Mono.empty();
	    }
	    DatabaseClient client = mysqlConfig.createClient();
	    return client.execute(UserQueryContainer.getMatchUser).bind("username", user.getUsername())
		    .bind("password", user.getPassword()).fetch().one().flatMap(m -> Mono.just("200. Success Login"));
	}).defaultIfEmpty("400. Fail Login");

	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(result, Object.class);

    }

    /**
     * user 삭제
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> deleteUser(ServerRequest request) {
	/*
	 * Optional<String> id = request.queryParam("id"); Mono<Integer> mono =
	 * mysqlConfig.createClient().execute(TodosQueryContainer.delTodo).bind("id",
	 * id.get()) .fetch().rowsUpdated();
	 */
	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(Flux.just("Invalid Data"),
		String.class);
    }

}
