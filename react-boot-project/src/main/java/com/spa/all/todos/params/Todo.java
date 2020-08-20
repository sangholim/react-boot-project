package com.spa.all.todos.params;

public class Todo {

    private long id;

    private String text;

    private boolean checked;

    public Todo() {
	// TODO Auto-generated constructor stub
    }
    
    public Todo(String text) {
	this.text = text;
    }
    
    
    public long getId() {
	return id;
    }

    public void setId(long id) {
	this.id = id;
    }

    public String getText() {
	return text;
    }

    public void setText(String text) {
	this.text = text;
    }

    public boolean isChecked() {
	return checked;
    }

    public void setChecked(boolean checked) {
	this.checked = checked;
    }

}
