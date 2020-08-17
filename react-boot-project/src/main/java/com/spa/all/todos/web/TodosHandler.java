package com.spa.all.todos.web;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.spa.all.config.RouteHandler;
import com.spa.all.config.dbc.MysqlConfig;
import com.spa.all.todos.sql.TodosQueryContainer;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Component
@Scope(value = "prototype")
public class TodosHandler implements RouteHandler {

    @Autowired (required = false)
    private MysqlConfig mysqlConfig;
    
    /**
     * todosList 가져오는 query 반드시 Flux Class로 반환
     * @param request
     * @return
     */
    public Mono<ServerResponse> todosList(ServerRequest request) {
	
	Flux<Map<String, Object>> flux = mysqlConfig.createClient().execute(TodosQueryContainer.getAllTodos).fetch().all();
	
	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(flux, HashMap.class);
    }

    /**
     * todo 추가
     * @param request
     * @return
     */
    public Mono<ServerResponse> insertTodo(ServerRequest request) {
	Optional<String> text = request.queryParam("text");
	Mono<Integer> mono = mysqlConfig.createClient().execute(TodosQueryContainer.addTodo+text.get() + TodosQueryContainer.close).fetch().rowsUpdated();

	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(mono, Integer.class);
    }
}
