// const bootstrap = require('bootstrap');
const express =require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
    // console.log(__dirname)
})

app.get("/contact", (req, res) =>{
res.sendFile(__dirname + '/src/contact.html')
})

app.listen(4040, ()=>{
    console.log('Listening on port 4040')
})