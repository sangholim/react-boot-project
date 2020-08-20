package com.spa.all.todos.web;

import java.net.URLDecoder;
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

    @Autowired(required = false)
    private MysqlConfig mysqlConfig;

    /**
     * todosList 가져오는 query 반드시 Flux Class로 반환
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> todosList(ServerRequest request) {

	Flux<Map<String, Object>> flux = mysqlConfig.createClient().execute(TodosQueryContainer.getAllTodos).fetch()
		.all();

	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(flux, HashMap.class);
    }

    /**
     * todo 추가 [단일]
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> insertTodo(ServerRequest request) {
	Optional<String> text = request.queryParam("text");
	try {
		String decodeString = URLDecoder.decode(text.get(), "UTF-8");
		Mono<Integer> then = mysqlConfig.createClient().insert().into("todos").value("text", decodeString)
			.map(r -> r.get(0, Integer.class)).one();
		// Handler 결과를 제대로 받지 못하면 ex) NPE...., 쿼리 실행되지 않음..
		return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(then, Integer.class);
			    
	} catch (Exception e) {
	    return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(Flux.just("Invalid Data"), String.class); 
	}

    }

    /**
     * todo 삭제
     * 
     * @param request
     * @return
     */
    public Mono<ServerResponse> deleteTodo(ServerRequest request) {
	Optional<String> id = request.queryParam("id");
	Mono<Integer> mono = mysqlConfig.createClient().execute(TodosQueryContainer.delTodo).bind("id", id.get())
		.fetch().rowsUpdated();

	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON).body(mono, Integer.class);
    }
}
