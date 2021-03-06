package com.spa.all;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.spa.all")
public class ReactBootProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactBootProjectApplication.class, args);
	}

}
