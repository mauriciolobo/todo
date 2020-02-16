const express = require('express')
const DbStore = require('nedb')
const cors = require('cors')

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

app.get('/', (req, res) => {
    dbGetAll(res)
})

app.get('/:id', (req, res) => {
    var id = req.params.id;
    db.findOne({ id }, (err, doc) => {
        res.send(doc)
    })
})

app.post('/', (req, res) => {
    var doc = {
        ...req.body,
        completed: false, 
        url: req.protocol + '://' + req.get('host') + '/' + data.id
    };
    db.insert(doc, (err, doc) => {
        res.send(doc)
    })
})

app.patch('/:id', (req, res) => {
    db.update({ id: req.params.id }, { $set: req.body }, {}, (err, number) => {
        res.send(req.body)
    })
})

app.delete('/', (req, res) => {
    db.remove({}, { multi: true }, (err, n) => {
        dbGetAll(res)
    })
})

app.delete('/:id', (req, res) => {
    db.remove({ id: req.params.id }, {}, (err, n) => {
        res.send(req.todo)
    })
})

app.listen(PORT, () => { console.log('Server is running...') })