const express = require('express')
const app = express()
const port = 3000


app.use((req, res, next) => {
  const reqDate = new Date()
  const year = reqDate.getFullYear()
  const month = reqDate.getMonth() + 1 // 0-11 
  const day = reqDate.getDate()
  const hour = reqDate.getHours()
  const min = reqDate.getMinutes()
  const sec = reqDate.getSeconds()

  res.on('finish', () => {
    const resDate = new Date()
    const elapsed = resDate - reqDate
    console.log(`${year}-${month}-${day} ${hour}:${min}:${sec} | ${req.method} from ${req.originalUrl} | total time: ${elapsed}ms`)
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})