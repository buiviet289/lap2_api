const express = require('express')
const app = express()
const port = 3000 /// cổng server chạy
app.get('/', (req, res) => {
    console.log("vào trang chủ")
    res.send('<h1 style="color: brown;"> Trang chủ </h1>')
  })
app.get('/home', (req, res) => {
    console.log("vào trang chủ home")
  res.send('<h1 style="color: red;"> Trang chủ home </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})