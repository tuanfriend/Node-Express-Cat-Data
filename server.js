// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback

app.use(express.static(__dirname + "/static"));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/cats", function (request, response) {
    // hard-coded user data
    response.render('cats');
})

app.get("/lion", function (request, response) {
    // hard-coded user data
    var pet_detail = 
        {name: "Lion Cute", age: "3 Years old", img: "img/cat1.jpg", food: "Human meat", spot: ["Under chair","On the table","On the Bed"]}
    ;
    response.render('detail', {pets: pet_detail});
})

app.get("/leonopad", function (request, response) {
    // hard-coded user data
    var pet_detail = 
        {name: "Leonopad Pretty", age: "1 Years old", img: "img/cat2.jpg", food: "Lion meat", spot: ["On the sky","In the kitchen","On the Bed"]}
    ;
    response.render('detail', {pets: pet_detail});
})

app.get("/blackpanther", function (request, response) {
    // hard-coded user data
    var pet_detail = 
        {name: "Black Panther Baby", age: "10 Years old", img: "img/cat3.jpg", food: "Thor, Hulk", spot: ["Wakanda","Anvenger House","Africa"]}
    ;
    response.render('detail', {pets: pet_detail});
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function () {
    console.log("listening on port 8000");
})