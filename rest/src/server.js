import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
// app.use(bodyParser)
app.use(bodyParser.json())

const data = [
  { id: 'a', name: 'Elliot', age: 2 },
  { id: 'b', name: 'Barton', age: 0 },
  { id: 'c', name: 'Ann',    age: 27 },
  { id: 'd', name: 'Kurt',   age: 25 },
]

app.use('/api/people/:id', ({ params: { id }}, res) => {
  console.log('yo')
  res.json(data.find(person => id === person.id))
})

app.use('/api/people', (req, res) => {
  console.log('yo')
  res.json(data)
})


app.listen(5000, () => {
  console.log('rest sever is running on port 5000')
})
