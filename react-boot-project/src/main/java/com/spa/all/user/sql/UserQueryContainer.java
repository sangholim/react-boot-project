package com.spa.all.user.sql;

public class UserQueryContainer {
    
    public static final String addUser = "INSERT INTO user values (null, :username, :password)";
    
    public static final String getUser = "SELECT * FROM user where username = :username";

    public static final String getMatchUser = getUser + " and password = :password";
       
    public static final String delUser = "DELETE FROM user where username = :username";
    
}
