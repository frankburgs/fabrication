# DB setup
``` sql
select version(); -- Display version
create database mydb; -- Creates db
drop database mydb; -- Deletes the db
CREATE TABLE fasteners (name varchar(25),qty int);
insert into fasteners values ('1/4-20 HH 3.5"', 75);




\h -- Display help
\l -- Display list of databases
\q -- Quit psql

```
# Queries
``` sql
select * from fasteners; -- Displays all entries
select * from fasteners where qty > 50 AND name = '1/4-20 HH 3.5"';
select * from fasteners order by name, qty;
select distinct name from fasteners;
```

CREATE TABLE fasteners (name varchar(25),qty int);

# Bumps
- First column needs to be called "name"