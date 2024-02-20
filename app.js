const express = require('express')
const app = express()
const path = require('path')
const port = 3030
app.use(express.static('public'))
app.set('view engine','ejs')

const indexRoutes = require('./routes/index.routes.js');
const menuRoutes = require('./routes/menu.routes');

app.use("/", indexRoutes)
app.use("/menu", menuRoutes)


app.listen(port,() => console.log(`http://localhost:${port}`))