const express = require('express')
const DbStore = require('nedb')
const cors = require('cors')
const uuid = require('uuid/v4')

const PORT = process.env.PORT || 3000

const app = express()
const db = new DbStore({ autoload: true, filename: 'todo' })

app.use(cors())
app.use(express.json())

function dbGetAll(res) {
    db.find({}, (err, doc) => {
        res.send(doc)
    })
}

function dbGetOne(res, _id){
    db.findOne({ _id }, (err, doc) => {
        res.send(doc)
    })
}

app.get('/', (req, res) => {
    dbGetAll(res)
})

app.get('/:id', (req, res) => {
    dbGetOne(res,req.params.id)
})

app.post('/', (req, res) => {
    var id = uuid();
    var doc = {
        ...req.body,
        completed: false, 
        _id : id,
        id,
        url: req.protocol + '://' + req.get('host') + '/' + id
    };
    db.insert(doc, (err, doc) => {
        res.send(doc)
    })
})

app.patch('/:id', (req, res) => {
    db.update({ _id: req.params.id }, { $set: req.body }, {}, (err, number) => {
        dbGetOne(res,req.params.id)
    })
})

app.delete('/', (req, res) => {
    db.remove({}, { multi: true }, (err, n) => {        
        dbGetAll(res)
    })
})

app.delete('/:id', (req, res) => {
    db.remove({ _id: req.params.id }, {}, (err, n) => {
        dbGetOne(res,req.params.id)
    })
})

app.listen(PORT, () => { console.log('Server is running...') })