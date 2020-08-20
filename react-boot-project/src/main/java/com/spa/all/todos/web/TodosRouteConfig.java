package com.spa.all.todos.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.spa.all.config.RouteConfig;
import com.spa.all.config.RouteHandler;

@Configuration
public class TodosRouteConfig implements RouteConfig {

    @Bean
    public RouterFunction<ServerResponse> routeInit(RouteHandler handler) {
	TodosHandler todosHandler = (TodosHandler) handler;

	return RouterFunctions
		.route(RequestPredicates.GET("/todosList").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			todosHandler::todosList)
		.andRoute(
			RequestPredicates.GET("/insertTodo").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			todosHandler::insertTodo)
		.andRoute(
			RequestPredicates.GET("/deleteTodo").and(RequestPredicates.accept(MediaType.APPLICATION_JSON)),
			todosHandler::deleteTodo);
    }
}
