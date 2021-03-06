package com.spa.all.user.sql;

public class UserQueryContainer {
    
    public static final String addUser = "INSERT INTO user values (null, :user.username, :user.password)";
    
   // public static final String getUser = "SELECT * FROM user where username = :username";
    public static final String getUser = "SELECT id, username, password FROM user where username = :username";

    public static final String getMatchUser = getUser + " and password = :password";
       
    public static final String delUser = "DELETE FROM user where username = :username";
    
}
