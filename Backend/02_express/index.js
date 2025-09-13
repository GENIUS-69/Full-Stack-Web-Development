import express from "express";

const app = express()
const port = 3000
app.use(express.json())

let teaData = []
let nextId = 1

app.post('/teas', (req, res) => {
  const { name, price } = req.body
  const newTea = { id: nextId++, name, price }
  teaData.push(newTea)
  res.status(201).send(newTea)
})

app.get('/teas', (req, res) => {
  res.status(201).send(teaData)
})

app.get('/teas',(req,res)=>{
  const tea = teaData.find(t=>id===parseInt(req.params.id))
  if (!tea) {
    return res.status(404).send("Tea not found")
  }
  res.status(200).send(tea)
})

app.listen(port, () => {
  console.log(`App is listing to port: http://localhost:${port}`);
})
