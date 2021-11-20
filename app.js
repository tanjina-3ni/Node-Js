const express = require('express');

const app = express();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: true })  

app.listen(3000, () => {
    console.log('Application started and Listening on port 3000');
});

// serve your css as static
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
});

app.get('/registration', (req, res) => {
    response = {  
        first_name:req.query.yourname,  
    };  
    console.log(response);  
    //res.end(JSON.stringify(response)); 
    res.sendFile(__dirname+'/registration.html');
});

app.post('/registration2', urlencodedParser, function (req, res) {  
    // Prepare output in JSON format  
    response = {  
        first_name:req.body.firstname,  
        last_name:req.body.lastname  
    };  
    //console.log(response);  
    res.end(JSON.stringify(response));  
 })  


