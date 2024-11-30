# TOC
- Setup
- Notes

# 
``` shell
npm create vite # React, JS
npm i bootstrap mermaid pg
npm i --save-dev sass
mkdir {src/js,src/scss}
```

- Add to /scss
``` css
@import "bootstrap/scss/bootstrap";
```

- Add to main.jsx
``` js
import '../scss/styles.scss'
import * as bootstrap from 'bootstrap' // Then move to importing individual components as used.
```

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

- PG library required for connection.

``` sql
select * from fasteners; -- Displays all entries
select * from fasteners where qty > 50 AND name = '1/4-20 HH 3.5"';
select * from fasteners order by name, qty;
select distinct name from fasteners;
```

# Notes

## PostgresQL
- First column of a new table needs to be called "name" 🤔

## Web
- Errors for browser compatibilities.
- Takes a few seconds to npm run dev.
- Try react-bootstrap if problems come up.