const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hei maailma! 😸</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`express-app: deployed with GitHub Actions & Watchtower`)
})
