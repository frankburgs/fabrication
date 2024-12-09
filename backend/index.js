const express = require('express')

const app = express()

app.use(express.json())

const port = 3000

const client = require('./db')

app.get('/', async (req, res) => {
  try{
    const newFasteners = await client.query("INSERT INTO fasteners VALUES ('cheese', 75)");
  }
  catch(err){console.log(err.message)}
})


app.post('/', async(req,res) =>{

    try{
        
    }
    catch (err){
        console.log(err.message);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})