package com.spa.all.todos.sql;

public class TodosQueryContainer {

    public static final String getAllTodos = "SELECT * from todos";
    /*
    public static final String addTodo = "INSERT INTO todos values (null, '";
    public static final String close = "');";
    */
    public static final String addTodo = "INSERT INTO todos values (null, :text)";
    
    public static final String delTodo = "DELETE FROM todos where id = :id";
    
}
