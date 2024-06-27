const express = require('express');
const path = require('path');

const app = express();


const publicPath = path.resolve('public');
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve('views/home.html'));
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve('views/register.html'));
});

app.get("/login", (req, res) => {
    res.sendFile(path.resolve('views/login.html'));
});


//Levantar servidor. 

const port = process.nextTick.PORT || 3001;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`));