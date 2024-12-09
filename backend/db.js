const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "password",
    database: "postgres"
})

client.connect();

client.query("select * from fasteners", (err, res) =>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})

client.query("INSERT INTO fasteners VALUES ('cheese', 75)", (err, res) =>{
    if(!err){
        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    client.end;
})

module.exports = client;