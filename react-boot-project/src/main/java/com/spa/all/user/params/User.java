package com.spa.all.user.params;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

@Table("user")
public class User {

    @Id
    private long id;
    
    @Column("username")
    private String username;
    @Column("password")
    private String password;

    public User() {

    }

    public User (long id, String username, String password) {
	this.id = id;
	this.username = username;
	this.password = password;
    }
    
    public User(String username, String password) {
	this.username = username;
	this.password = password;
    }

    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    public String getUsername() {
	return username;
    }

    public void setUsername(String username) {
	this.username = username;
    }

    public String getPassword() {
	return password;
    }

    public void setPassword(String password) {
	this.password = password;
    }

}
