const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static("public"));
    app.use(express.urlencoded({extended: true}))


app.set("view engine", "ejs");

//data show
const dataShow = [];

//get router
app.get('/', (req, res) => {
    res.render("index",{dataShows: dataShow});

});

app.get('/about', (req, res) => {
    res.render("about",{});

});

app.get('/contact', (req, res) => {
    res.render("contact",{});

});

app.get('/login', (req, res) => {
    res.render("login",{});

});

//post router
app.post('/', (req, res) => {
    const inputData = req.body.inputData;
    dataShow.push(inputData);
    res.redirect("/");
    
});

//error router
app.use((req, res) => {
    res.send("404:error ! 00url is not found. ");
});



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

