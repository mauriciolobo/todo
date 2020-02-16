const express = require('express')
const DbStore = require('nedb')

const PORT = process.env.PORT || 3000

const app = express()
const db = new DbStore({ autoload: true, filename: 'todo' })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use(express.json())

function createTodo(req, data) {
    return {
      title: data.title,
      order: data.order,
      completed: data.completed || false,
      url: req.protocol + '://' + req.get('host') + '/' + data.id
    };
}

app.get('/', (req, res) => {
    db.find({}, (err, data) => {
        return res.send(data)
    })
})

app.post('/', (req, res) => {
    db.insert({
        ...req.body,
        completed: false,
        url: req.protocol + '://' + req.get('host') + '/' + data.id
    },
        (err, data) => { return res.send(data) })
})

app.patch('/:id', (req, res) => {
    res.send({ message: 'PATCH OK' })
})

app.delete('/', (req, res) => {
    res.send([])
})

app.listen(PORT, () => { console.log('Server is running...') })