-- todos db 생성
create database todos;
use todos;
-- todos table 생성
create table todos (
id bigint(20) not null auto_increment,
text varchar(255) default '',
primary key(id)
);
