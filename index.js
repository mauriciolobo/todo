const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req,res)=>{
    res.send('GET OK')
})

app.post('/', (req,res)=>{
    res.send('POST OK')
})

app.patch('/', (req,res)=>{
    res.send('PATCH OK')
})

app.delete('/', (req,res)=>{
    res.send('DELETE OK')
})

app.listen(PORT, ()=>{console.log('Server is running...')})