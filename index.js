const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
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