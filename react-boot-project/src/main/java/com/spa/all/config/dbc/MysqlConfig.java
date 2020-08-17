package com.spa.all.config.dbc;

import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.core.DatabaseClient;

import io.r2dbc.spi.Connection;
import io.r2dbc.spi.ConnectionFactories;
import io.r2dbc.spi.ConnectionFactory;

@Configuration
public class MysqlConfig implements ApplicationRunner  {

    private ConnectionFactory connectionFactory;
    @Value("${spring.r2dbc.url}")
    private String url;
    @Value("${spring.r2dbc.username}")
    private String username;
    @Value("${spring.r2dbc.password}")
    private String password;
    
    private DatabaseClient client;
    
    @Override
    public void run(ApplicationArguments args) throws Exception {
	// r2dbc:mysql://user:user@localhost:3306/todos?useUnicode=true&characterEncoding=utf8
	String[] urlComps = url.split("//");
	connectionFactory = ConnectionFactories.get(urlComps[0] + "//" + username + ':' + password + '@' + urlComps[1]);
	client = DatabaseClient.create(connectionFactory);
    }


    /**
     * db에 세션 접속하는 로직
     * 
     * @return
     */
    public Publisher<? extends Connection> createConnection() {
	return connectionFactory.create();
    }
    
    public DatabaseClient createClient () {
	return client;
    }
}