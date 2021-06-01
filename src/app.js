const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//public static path
const public_Path = path.join(__dirname,'../public/');

//template engine
app.set('view engine','hbs');
app.set('views','../templates/views/')
//partial access
hbs.registerPartials('../templates/partials/')

app.use(express.static(public_Path));

//routing
app.get('',(req,res)=>{
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/weather', (req, res) => {
    res.render('Weather');
});
app.get('*', (req, res) => {
    res.render('404error',{errorMessage: 'Opps! Page Not Found'});
});
app.listen(port,()=>{
    console.log(`Listening to the port at ${port}`);
})