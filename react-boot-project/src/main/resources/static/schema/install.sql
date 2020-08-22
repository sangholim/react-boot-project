-- todos db 생성
CREATE DATABASE todos DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
use todos;
-- todos table 생성
create table todos (
id bigint(20) not null auto_increment,
text varchar(255) default '',
primary key(id)
) default character set utf8 collate utf8_general_ci;
-- user table 생성
create table user (
id bigint(20) not null auto_increment,
username varchar(255) default '',
password varchar(255) default '',
primary key(id),
UNIQUE (ID)
) default character set utf8 collate utf8_general_ci;