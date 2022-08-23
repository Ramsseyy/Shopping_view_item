const express = require('express')
const app = new express()


app.use(express.static('public'))
app.listen(5000, ()=>{
    console.log('App listening on port 5000')
});

app.get('/index', (req,res) => {
    res.sendFile(path.resolve(__dirname, '/index.html'))
});

app.get('/about', (req,res) => {
    res.sendFile(path.resolve(__dirname, '/about.html'))
});

app.get('/contact', (req,res) => {
    res.sendFile(path.resolve(__dirname, '/contact.html'))
});
app.get('/post', (req,res) => {
    res.sendFile(path.resolve(__dirname, '/post.html'))
});