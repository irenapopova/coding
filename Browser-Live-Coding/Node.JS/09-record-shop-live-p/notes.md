### creating MySql Database
commands 
```bash
mysql -u root -p

 mysql> use mysql
 mysql> mysql.server.start
 mysql> mysql.server.stop
```
```bash
 mysql> use mysql
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

👇 Database changed
👇 mysql> show databases;
    
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

 mysql> create table users(id int primary key auto_increment,name varchar(50),email varchar(50),country varchar(50));
Query OK, 0 rows affected (0.01 sec)

 mysql> insert into users (name, email, country)values("Irena","irena6@gmail.com","Germany");
Query OK, 1 row affected (0.01 sec)

 mysql> insert into users (name, email, country)values("Anna","anna6@gmail.com","Germany");
Query OK, 1 row affected (0.00 sec)

 mysql> select * from users;
+----+-------+------------------+---------+
| id | name  | email            | country |
+----+-------+------------------+---------+
|  1 | Irena | irena6@gmail.com | Germany |
|  2 | Anna  | anna6@gmail.com  | Germany |
+----+-------+------------------+---------+
2 rows in set (0.00 sec)

 mysql> select email from users;
+------------------+
| email            |
+------------------+
| irena6@gmail.com |
| anna6@gmail.com  |
+------------------+
2 rows in set (0.00 sec)

 mysql>
```



### 👇 MySQL DATABASE lesson- sample database
in terminal mysql shell
```bash

mysql> Select * FROM users;
ERROR 1046 (3D000): No database selected
mysql> use product_shop;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed
mysql> Select * FROM users;
+----+---------+------------------+----------------+
| id | name    | email            | country        |
+----+---------+------------------+----------------+
|  1 | Naqvi   | test@gmail.com   | pakistan       |
|  2 | Joseph  | joseph@gmail.com | united_kingdom |
|  3 | Aghy    | Aghy@gmail.com   | Syria          |
|  4 | Mike    | Mike@gmail.com   | united_kingdom |
|  5 | SyedAli | syed@yahoo.com   | pakistan       |
+----+---------+------------------+----------------+
5 rows in set (0.00 sec)

mysql> DELETE FROM users WHERE id=4;
Query OK, 1 row affected (0.02 sec)

mysql> Select * FROM users;
+----+---------+------------------+----------------+
| id | name    | email            | country        |
+----+---------+------------------+----------------+
|  1 | Naqvi   | test@gmail.com   | pakistan       |
|  2 | Joseph  | joseph@gmail.com | united_kingdom |
|  3 | Aghy    | Aghy@gmail.com   | Syria          |
|  5 | SyedAli | syed@yahoo.com   | pakistan       |
+----+---------+------------------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO users(name,email,country) VALUES ("John","john@gmail.com","Syria");
Query OK, 1 row affected (0.01 sec)

mysql> Select * FROM users;
+----+---------+------------------+----------------+
| id | name    | email            | country        |
+----+---------+------------------+----------------+
|  1 | Naqvi   | test@gmail.com   | pakistan       |
|  2 | Joseph  | joseph@gmail.com | united_kingdom |
|  3 | Aghy    | Aghy@gmail.com   | Syria          |
|  5 | SyedAli | syed@yahoo.com   | pakistan       |
|  6 | John    | john@gmail.com   | Syria          |
+----+---------+------------------+----------------+
5 rows in set (0.00 sec)

mysql> CREATE TABLE orders(id INT PRIMARY KEY AUTO_INCREMENT, productName varchar(50) NOT NULL, price INT
NOT NULL, date DATE NOT NULL, userid INT, FORIEGN KEY (userid) REFERENCES users(id) );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'KEY (userid) REFERENCES users(id) )' at line 1
mysql> CREATE TABLE orders(id INT PRIMARY KEY AUTO_INCREMENT, productName varchar(50) NOT NULL, price INT
NOT NULL, date DATE NOT NULL, userid INT, FOREIGN KEY (userid) REFERENCES users(id) );
Query OK, 0 rows affected (0.05 sec)

mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Chocolate",15,20-01-2021,2);
ERROR 1292 (22007): Incorrect date value: '-2002' for column 'date' at row 1
mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Chocolate",15,20/01/2021,2);
ERROR 1292 (22007): Incorrect date value: '0.009896091044037605' for column 'date' at row 1
mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Chocolate",15,"2021-01-20",2);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Mike",10,"2021-01-20",3);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Butter",12,"2021-01-20",5);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Eggs",5,"2021-01-20",2);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO orders(productName,price,date,userid) VALUES ("Bread",15,"2021-01-20",1);
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM orders;
+----+-------------+-------+------------+--------+
| id | productName | price | date       | userid |
+----+-------------+-------+------------+--------+
|  1 | Chocolate   |    15 | 2021-01-20 |      2 |
|  2 | Mike        |    10 | 2021-01-20 |      3 |
|  3 | Butter      |    12 | 2021-01-20 |      5 |
|  4 | Eggs        |     5 | 2021-01-20 |      2 |
|  5 | Bread       |    15 | 2021-01-20 |      1 |
+----+-------------+-------+------------+--------+
5 rows in set (0.01 sec)

mysql> Select * FROM orders Where productName="Chocolate";
+----+-------------+-------+------------+--------+
| id | productName | price | date       | userid |
+----+-------------+-------+------------+--------+
|  1 | Chocolate   |    15 | 2021-01-20 |      2 |
+----+-------------+-------+------------+--------+
1 row in set (0.00 sec)

mysql> SELECT users.name , users.email, users.country ,orders.productName,orders.price,orders.date FROM users INNER JOIN orders ON users.id = orders.userid;
+---------+------------------+----------------+-------------+-------+------------+
| name    | email            | country        | productName | price | date       |
+---------+------------------+----------------+-------------+-------+------------+
| Naqvi   | test@gmail.com   | pakistan       | Bread       |    15 | 2021-01-20 |
| Joseph  | joseph@gmail.com | united_kingdom | Chocolate   |    15 | 2021-01-20 |
| Joseph  | joseph@gmail.com | united_kingdom | Eggs        |     5 | 2021-01-20 |
| Aghy    | Aghy@gmail.com   | Syria          | Mike        |    10 | 2021-01-20 |
| SyedAli | syed@yahoo.com   | pakistan       | Butter      |    12 | 2021-01-20 |
+---------+------------------+----------------+-------------+-------+------------+
5 rows in set (0.01 sec)

mysql> SELECT user.id,users.name , users.email, users.country ,orders.productName,orders.price,orders.date
 FROM users INNER JOIN orders ON users.id = orders.userid; 
ERROR 1054 (42S22): Unknown column 'user.id' in 'field list'
mysql> SELECT users.id,users.name , users.email, users.country ,orders.productName,orders.price,orders.date FROM users INNER JOIN orders ON users.id = orders.userid;
+----+---------+------------------+----------------+-------------+-------+------------+
| id | name    | email            | country        | productName | price | date       |
+----+---------+------------------+----------------+-------------+-------+------------+
|  1 | Naqvi   | test@gmail.com   | pakistan       | Bread       |    15 | 2021-01-20 |
|  2 | Joseph  | joseph@gmail.com | united_kingdom | Chocolate   |    15 | 2021-01-20 |
|  2 | Joseph  | joseph@gmail.com | united_kingdom | Eggs        |     5 | 2021-01-20 |
|  3 | Aghy    | Aghy@gmail.com   | Syria          | Mike        |    10 | 2021-01-20 |
|  5 | SyedAli | syed@yahoo.com   | pakistan       | Butter      |    12 | 2021-01-20 |
+----+---------+------------------+----------------+-------------+-------+------------+
5 rows in set (0.00 sec)

mysql> SELECT users.id,users.name , users.email, users.country ,orders.productName,orders.price,orders.date FROM orders LEFT JOIN users ON orders.userid= users.id;
+------+---------+------------------+----------------+-------------+-------+------------+
| id   | name    | email            | country        | productName | price | date       |
+------+---------+------------------+----------------+-------------+-------+------------+
|    2 | Joseph  | joseph@gmail.com | united_kingdom | Chocolate   |    15 | 2021-01-20 |
|    3 | Aghy    | Aghy@gmail.com   | Syria          | Mike        |    10 | 2021-01-20 |
|    5 | SyedAli | syed@yahoo.com   | pakistan       | Butter      |    12 | 2021-01-20 |
|    2 | Joseph  | joseph@gmail.com | united_kingdom | Eggs        |     5 | 2021-01-20 |
|    1 | Naqvi   | test@gmail.com   | pakistan       | Bread       |    15 | 2021-01-20 |
+------+---------+------------------+----------------+-------------+-------+------------+
5 rows in set (0.00 sec)

mysql> SELECT users.id,users.name , users.email, users.country ,orders.productName,orders.price,orders.date FROM orders RIGHT JOIN users ON orders.userid= users.id;
+----+---------+------------------+----------------+-------------+-------+------------+
| id | name    | email            | country        | productName | price | date       |
+----+---------+------------------+----------------+-------------+-------+------------+
|  1 | Naqvi   | test@gmail.com   | pakistan       | Bread       |    15 | 2021-01-20 |
|  2 | Joseph  | joseph@gmail.com | united_kingdom | Chocolate   |    15 | 2021-01-20 |
|  2 | Joseph  | joseph@gmail.com | united_kingdom | Eggs        |     5 | 2021-01-20 |
|  3 | Aghy    | Aghy@gmail.com   | Syria          | Mike        |    10 | 2021-01-20 |
|  5 | SyedAli | syed@yahoo.com   | pakistan       | Butter      |    12 | 2021-01-20 |
|  6 | John    | john@gmail.com   | Syria          | NULL        |  NULL | NULL       |
+----+---------+------------------+----------------+-------------+-------+------------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM orders RIGHT JOIN users ON orders.userid= users.id;
+------+-------------+-------+------------+--------+----+---------+------------------+----------------+
| id   | productName | price | date       | userid | id | name    | email            | country        |
+------+-------------+-------+------------+--------+----+---------+------------------+----------------+
|    5 | Bread       |    15 | 2021-01-20 |      1 |  1 | Naqvi   | test@gmail.com   | pakistan       |
|    1 | Chocolate   |    15 | 2021-01-20 |      2 |  2 | Joseph  | joseph@gmail.com | united_kingdom |
|    4 | Eggs        |     5 | 2021-01-20 |      2 |  2 | Joseph  | joseph@gmail.com | united_kingdom |
|    2 | Mike        |    10 | 2021-01-20 |      3 |  3 | Aghy    | Aghy@gmail.com   | Syria          |
|    3 | Butter      |    12 | 2021-01-20 |      5 |  5 | SyedAli | syed@yahoo.com   | pakistan       |
| NULL | NULL        |  NULL | NULL       |   NULL |  6 | John    | john@gmail.com   | Syria          |
+------+-------------+-------+------------+--------+----+---------+------------------+----------------+
6 rows in set (0.00 sec)

mysql> SELECT *, SUM(price) FROM orders RIGHT JOIN users ON orders.userid= users.id ;
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'product_shop.orders.id'; this is incompatible with sql_mode=only_full_group_by
mysql> SELECT *, SUM(orders.price) FROM orders RIGHT JOIN users ON orders.userid= users.id ;
ERROR 1140 (42000): In aggregated query without GROUP BY, expression #1 of SELECT list contains nonaggregated column 'product_shop.orders.id'; this is incompatible with sql_mode=only_full_group_by
mysql> SELECT SUM(price) from orders;
+------------+
| SUM(price) |
+------------+
|         57 |
+------------+
1 row in set (0.00 sec)

mysql> SELECT productName from orders WHERE MAX(price) ;
ERROR 1111 (HY000): Invalid use of group function
mysql> SELECT productName from orders WHERE price>10 ;
+-------------+
| productName |
+-------------+
| Chocolate   |
| Butter      |
| Bread       |
+-------------+
3 rows in set (0.00 sec)

mysql> Select * from orders SORT BY price;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'BY price' at line 1
mysql> Select * from orders SORT BY price;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'BY price' at line 1
mysql> Select * from orders ORDER BY price;
+----+-------------+-------+------------+--------+
| id | productName | price | date       | userid |
+----+-------------+-------+------------+--------+
|  4 | Eggs        |     5 | 2021-01-20 |      2 |
|  2 | Mike        |    10 | 2021-01-20 |      3 |
|  3 | Butter      |    12 | 2021-01-20 |      5 |
|  1 | Chocolate   |    15 | 2021-01-20 |      2 |
|  5 | Bread       |    15 | 2021-01-20 |      1 |
+----+-------------+-------+------------+--------+
5 rows in set (0.00 sec)

mysql> Select * from orders ORDER BY price DSC;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'DSC' at line 1
mysql> Select * from orders ORDER BY price DCS;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'DCS' at line 1
mysql> Select * from orders ORDER BY price DESC;
+----+-------------+-------+------------+--------+
| id | productName | price | date       | userid |
+----+-------------+-------+------------+--------+
|  1 | Chocolate   |    15 | 2021-01-20 |      2 |
|  5 | Bread       |    15 | 2021-01-20 |      1 |
|  3 | Butter      |    12 | 2021-01-20 |      5 |
|  2 | Mike        |    10 | 2021-01-20 |      3 |
|  4 | Eggs        |     5 | 2021-01-20 |      2 |
+----+-------------+-------+------------+--------+
5 rows in set (0.00 sec)

```