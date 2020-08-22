package com.spa.all.user.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

@Configuration
public class UserRouteConfig {

    @Bean
    public RouterFunction<ServerResponse> userRouteInit(UserHandler userHandler) {

	return RouterFunctions
		.route(RequestPredicates.POST("/deleteUser").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			userHandler::deleteUser)
		.andRoute(RequestPredicates.POST("/login").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			userHandler::login)
		.andRoute(RequestPredicates.POST("/register").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			userHandler::register);
    }
}
