package com.spa.all.config.dbc;

import java.time.Duration;

import org.reactivestreams.Publisher;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.r2dbc.core.DatabaseClient;

import io.r2dbc.pool.ConnectionPool;
import io.r2dbc.pool.ConnectionPoolConfiguration;
import io.r2dbc.spi.Connection;
import io.r2dbc.spi.ConnectionFactories;
import io.r2dbc.spi.ConnectionFactory;
import io.r2dbc.spi.ValidationDepth;

@Configuration
public class MysqlConfig implements ApplicationRunner  {

    private ConnectionPool connectionPool;
    
    @Value("${spring.r2dbc.url}")
    private String url;
    @Value("${spring.r2dbc.username}")
    private String username;
    @Value("${spring.r2dbc.password}")
    private String password;
    @Value("${spring.r2dbc.pool.initialSize}")
    private int initialSize;
    @Value("${spring.r2dbc.pool.maxSize}")
    private int maxSize;
    @Value("${spring.r2dbc.pool.maxIdleTime}")
    private int maxIdleTime;
    @Value("${spring.r2dbc.pool.maxLifeTime}")
    private int maxLifeTime;
    @Value("${spring.r2dbc.pool.maxCreateConnectionTime}")
    private int maxCreateConnectionTime;
    @Value("${spring.r2dbc.pool.validationQuery}")
    private String validationQuery;
    @Value("${spring.r2dbc.pool.name}")
    private String name;

    private DatabaseClient client;
    
    @Override
    public void run(ApplicationArguments args) throws Exception {
	// r2dbc:mysql://user:user@localhost:3306/todos?useUnicode=true&characterEncoding=utf8
	String[] urlComps = url.split("//");
	
	ConnectionFactory connectionFactory = ConnectionFactories.get(urlComps[0] + "//" + username + ':' + password + '@' + urlComps[1]);
	// ConnectionPool 설정
	ConnectionPoolConfiguration poolConfiguration = ConnectionPoolConfiguration.builder(connectionFactory)
		.initialSize(initialSize).maxSize(maxSize).maxIdleTime(Duration.ofMinutes(maxIdleTime))
		.maxLifeTime(Duration.ofMinutes(maxLifeTime))
		.maxCreateConnectionTime(Duration.ofMillis(maxCreateConnectionTime))
		.validationDepth(ValidationDepth.LOCAL).validationQuery(validationQuery).name(name).build();
	connectionPool = new ConnectionPool(poolConfiguration);
	/*
	 * 13.4. Introduction to DatabaseClient
         *  Spring Data R2DBC includes a reactive, non-blocking DatabaseClient for database interaction. The client has a functional, fluent API with reactive types for declarative composition. DatabaseClient encapsulates resource handling such as opening and closing connections so your application code can make use of executing SQL queries or calling higher-level functionality such as inserting or selecting data.

         *  DatabaseClient is a young application component providing a minimal set of convenience methods that is likely to be extended through time.
         *  Once configured, DatabaseClient is thread-safe and can be reused across multiple instances.
         *  ref: https://docs.spring.io/spring-data/r2dbc/docs/1.0.0.M1/reference/html/
         *  한번 client 객체를 생성시.. 여러쓰레드가 참조해도 안전하다.
         */
	client = DatabaseClient.create(connectionPool);
	/*
	R2dbc r2dbc = new R2dbc(new PostgresqlConnectionFactory(configuration));

	r2dbc.inTransaction(handle ->
	    handle.execute("INSERT INTO test VALUES ($1)", 100))

	    .thenMany(r2dbc.inTransaction(handle ->
	        handle.select("SELECT value FROM test")
	            .mapResult(result -> result.map((row, rowMetadata) -> row.get("value", Integer.class)))))

	    .subscribe(System.out::println);
	    */
	
	}


    /**
     * db에 세션 접속하는 로직
     * 
     * @return
     */
    public Publisher<? extends Connection> createConnection() {
	return connectionPool.create();
    }
    
    public DatabaseClient createClient () {
	return client;
    }
}
