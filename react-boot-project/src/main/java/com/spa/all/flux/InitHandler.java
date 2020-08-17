package com.spa.all.flux;

import java.util.HashMap;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;

import reactor.core.publisher.Mono;

@Component
public class InitHandler {

    private HashMap result = new HashMap<>();

    private Mono<HashMap> mapper = Mono.just(result);

    public Mono<ServerResponse> init(ServerRequest request) {
	result.put("number", 1234);
	result.put("textr", "hello world!");
	return ServerResponse.ok().contentType(MediaType.APPLICATION_JSON)
		.body(BodyInserters.fromProducer(mapper, HashMap.class));
    }
}
