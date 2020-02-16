const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('the server is up and accessible')
})

app.post('/', (req,res)=>{
    res.json({message:'POST OK', ...req.body})
})

app.patch('/', (req,res)=>{
    res.json({message:'PATCH OK'})
})

app.delete('/', (req,res)=>{
    res.json([])
})

app.listen(PORT, ()=>{console.log('Server is running...')})