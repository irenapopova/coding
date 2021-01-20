### creating MySql Database

### mysql> use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

👇 Database changed
### mysql> show databases;
    
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

mysql> create database product_shop;
Query OK, 1 row affected (0.01 sec)

### mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| product_shop       |
| sys                |
+--------------------+
5 rows in set (0.00 sec)

### mysql> create table users;
ERROR 4028 (HY000): A table must have at least one visible column.
### mysql> create table users(id int primary key auto_increment,name varchar(50),email varchar(50),country varchar(50));
Query OK, 0 rows affected (0.01 sec)

### mysql> insert into users (name, email, country)values("Irena","irena6@gmail.com","Germany");
Query OK, 1 row affected (0.01 sec)

### mysql> insert into users (name, email, country)values("Anna","anna6@gmail.com","Germany");
Query OK, 1 row affected (0.00 sec)

### mysql> select * from users;
+----+-------+------------------+---------+
| id | name  | email            | country |
+----+-------+------------------+---------+
|  1 | Irena | irena6@gmail.com | Germany |
|  2 | Anna  | anna6@gmail.com  | Germany |
+----+-------+------------------+---------+
2 rows in set (0.00 sec)

### mysql> select email from users;
+------------------+
| email            |
+------------------+
| irena6@gmail.com |
| anna6@gmail.com  |
+------------------+
2 rows in set (0.00 sec)

### mysql>