const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())

app.get('/', (req,res)=>{
    res.json({message:'GET OK'})
})

app.post('/', (req,res)=>{
    res.json({message:'POST OK'})
})

app.patch('/', (req,res)=>{
    res.json({message:'PATCH OK'})
})

app.delete('/', (req,res)=>{
    res.json({message:'DELETE OK'})
})

app.listen(PORT, ()=>{console.log('Server is running...')})